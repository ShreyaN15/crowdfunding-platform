const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/crowd_db';

const connectDB = async () => {
   try {
        const conn = await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected to:', conn.connection.host);
   } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit process with failure
   } 
};

// ✅ Export the function outside the function body
module.exports = connectDB;
