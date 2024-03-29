const express = require('express');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const keys = require('./configs/keys');
const path = require('path');

const department = require('./routes/Department');
const promotion = require('./routes/Promotion');
const product = require('./routes/Product');

const app = express();
const PORT = process.env.PORT || 4000;
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(expressValidator());

const uri = keys.mongoURI;
mongoose.set('useCreateIndex', true);
mongoose.connect(uri, {useNewUrlParser: true})
    .then(() => console.log("done"))
    .catch(err => {
        console.log(err);
    });

//departments router
app.use('/department', department);
// promotions router
app.use('/promotion', promotion);
// products router
app.use('/product', product);

//server static assets if in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build','index.html'))
    })
}

app.listen(PORT, (req, res) => {
    console.log("server running on port: " + PORT);
});

module.exports = app;
