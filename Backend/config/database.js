const mongoose = require('mongoose');

const mongoUrl = process.env.MONGODB_URI || 'default-mongo-uri';
mongoose
    .connect(mongoUrl)
    .then((res) => console.log('> Connected to MongoDB...'))
    .catch((err) => {
        console.log(`> Error while connecting to MongoDB: ${err.message}`);
        process.exit(1);
    });
