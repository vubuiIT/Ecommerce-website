const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const routes = require('./routes');
dotenv.config();

const app = express();
const port = process.env.PORT || 3002;
const queryString = process.env.MONGODB_URI|| "mongodb+srv://Anhvu200376:w49PYBm7Nyp7ocQx@webhayho.z4duw.mongodb.net/?retryWrites=true&w=majority&appName=webhayho";
mongoose.connect(queryString, {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log('Error:', error);
})
routes(app);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})