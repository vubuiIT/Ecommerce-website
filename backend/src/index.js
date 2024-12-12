const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
dotenv.config();



const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));
app.use(express.json());
const port = process.env.PORT || 3001;
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