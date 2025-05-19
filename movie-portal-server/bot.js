const TelegramBot = require('node-telegram-bot-api');
const mongoose = require('mongoose');
require('dotenv').config();

const token = '7598045717:AAEuyW9yogb4OAhO8EfP2oAPPDQ0pldtz6I';

const bot = new TelegramBot(token, { polling: true });

const uri = `mongodb+srv://${process.env.db_user}:${process.env.UserPassword}@cluster0.wclmi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'favouriteDB'
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const UserChatSchema = new mongoose.Schema({
    userId: String,
    chatId: Number
});

const UserChat = mongoose.model('UserChat', UserChatSchema, 'userchats');

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const keyboard = {
        reply_markup: {
            keyboard: [
                [{ text: '🎬 Мои любимые фильмы' }],
            ],
            resize_keyboard: true,
            one_time_keyboard: false
        }
    };
    bot.sendMessage(chatId, 'Привет! Введите свою почту для связки аккаунта:', keyboard);
});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text && text !== '🎬 Мои любимые фильмы' && !text.startsWith('/')) {
        try {
            // Проверяем, связан ли уже этот chatId с каким-либо аккаунтом
            const existingChat = await UserChat.findOne({ chatId: chatId });
            if (existingChat) {
                bot.sendMessage(chatId, 'Этот чат уже связан с другим аккаунтом.');
                return;
            }

            const userExists = await checkUserExists(text);

            if (userExists) {
                const newUserChat = new UserChat({
                    userId: text,
                    chatId: chatId
                });
                await newUserChat.save();
                bot.sendMessage(chatId, `Аккаунт успешно связан с email: ${text}`);
            } else {
                bot.sendMessage(chatId, 'Пользователь с таким email не найден.');
            }
        } catch (error) {
            console.error('Error in email processing:', error);
            bot.sendMessage(chatId, 'Произошла ошибка при связывании аккаунта.');
        }
    } else if (text === '🎬 Мои любимые фильмы') {
        try {
            const userChat = await UserChat.findOne({ chatId: chatId });

            if (userChat) {
                const userId = userChat.userId;
                const favorites = await getFavorites(userId);

                if (favorites && favorites.length > 0) {
                    let message = 'Ваши избранные фильмы:\n\n';
                    favorites.forEach(movie => {
                        message += `- ${movie.title} `;
                        if (movie.releaseYear) {
                            message += `\n(${movie.releaseYear}`;
                            if (movie.genre) {
                                message += `, ${movie.genre}`;
                            }
                            message += `)`;
                        }
                        if (movie.rating) {
                            message += ` - Rating: ${movie.rating}`;
                        }
                        message += `\n\n`;
                    });
                    bot.sendMessage(chatId, message);
                } else {
                    bot.sendMessage(chatId, 'У вас нет избранных фильмов.');
                }
            } else {
                bot.sendMessage(chatId, 'Аккаунт не связан. Введите свою почту для связки аккаунта.');
            }
        } catch (error) {
            console.error('Error in /my_favorites:', error);
            bot.sendMessage(chatId, 'Произошла ошибка при получении избранных фильмов.');
        }
    }
});

async function checkUserExists(email) {
    try {
        if (mongoose.connection.readyState !== 1) {
            await mongoose.connect(uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                dbName: 'favouriteDB'
            });
        }

        const movie = await mongoose.connection.db.collection('favouriteMovie').findOne({ email: email });

        return !!movie;
    } catch (error) {
        console.error('Error in checkUserExists:', error);
        return false;
    }
}

async function getFavorites(userId) {
    try {
        if (mongoose.connection.readyState !== 1) {
            await mongoose.connect(uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                dbName: 'favouriteDB'
            });
        }

        const favorites = await mongoose.connection.db.collection('favouriteMovie').find({ email: userId }).toArray();

        return favorites.map(movie => ({
            title: movie.title,
            releaseYear: movie.releaseYear,
            genre: movie.genre,
            rating: movie.rating
        }));
    } catch (error) {
        console.error('Error in getFavorites:', error);
        return [];
    }
}