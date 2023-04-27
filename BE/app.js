const express = require('express');
const cors = require('cors');
const movieRouter = require('./app/routes/movie.route');
const userRouter = require('./app/routes/user.route');
const ApiError = require('./app/api-error');
const app = express();
const path = require('path');
require('dotenv').config()
var bodyParser = require('body-parser');



app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());
app.use(express.json());
app.use('/api/movies', movieRouter);
app.use('/api/user', userRouter);
app.use(express.static(path.join(__dirname, "public")));




app.get('/', (req, res) => {
    res.json({message: 'Welcome to review application !'})
});

app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
})

app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json(
        {message: err.message || 'Internal Server Error'
    });
})



module.exports = app;