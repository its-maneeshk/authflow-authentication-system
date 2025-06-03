const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("Database Connection Successfull...");
    }
    catch(error) {
        console.error(`Error connecting databse: ${error}`);
        process.exit(1);
    }
}

module.exports = connectDB;