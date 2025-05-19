const admin = require('firebase-admin');
const serviceAccount = require('./movie-catalog-34792-firebase-adminsdk-fbsvc-87c70ab2d0.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://movie-catalog-34792" 
});


const uid = 'j2cISCr54LaljNJK8QiFfPLDeX52'; 

admin.auth().setCustomUserClaims(uid, { admin: true })
    .then(() => {
        console.log(`Пользователь ${uid} стал администратором`);
    })
    .catch((error) => {
        console.error('Ошибка при установке Custom Claims:', error);
    });