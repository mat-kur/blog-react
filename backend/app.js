const express = require('express')
const app = express();
const path = require('path');

const cors = require("cors");
const cookiesParser = require('cookie-parser')
const session = require('express-session')

// init database
require('./app/db/db-mongoose');


app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'fsdaf42342314321nk4b231hj4g23k1jh23k1j4hjk2hfkjesdahjkwefq43o21',
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 2 // 2day
    },
    resave: false
}));
app.use(cookiesParser());

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    credentials: true,
}))

// app.use(cors());

// routes
app.use(require('./app/routes/web'))
app.use('/admin', require('./app/middleware/is-user-admin'))

app.listen(5000)

