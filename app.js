const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const rootDir = require('./util/path');
const mainRoutes = require('./routes/main');
const usersRoutes = require('./routes/users');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/users', usersRoutes);
app.use('/', mainRoutes);

app.use((req, res) => {
    res.sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000);