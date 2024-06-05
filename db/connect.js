const mongoose = require('mongoose');

uri = "mongodb+srv://ankitatka8:KZcWKlC2xMMb8NcA@cluster0.cdxsi76.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = () => {
    return mongoose.connect(uri);
}

module.exports = connectDB;