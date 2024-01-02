const mongoose = require('mongoose');

async function initdb() {
    try {
        await mongoose.connect("mongodb+srv://amanap23052001:bloodbank@bloodbank.vr1sphm.mongodb.net/?retryWrites=true&w=majority" , {dbName : 'bloodbank'})
        console.log('Connected to DB successfully');
    } catch (error) {
        console.log('Error while connecting to DB');
        console.log(error);
    }
}

module.exports = initdb