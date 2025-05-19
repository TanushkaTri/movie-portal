const mongoose = require('mongoose');


const userChatSchema = new mongoose.Schema({
  chatId: { type: Number, required: true },
  email: { type: String },
  userId: { type: String, required: true },
}, {
  collection: 'userchats',
});

const UserChat = mongoose.model('UserChat', userChatSchema);
module.exports = UserChat;
