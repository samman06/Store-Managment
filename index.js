const express = require('express');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const keys = require('./configs/keys');

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
app.use('/departments', department);
// promotions router
app.use('/promotions', promotion);
// products router
app.use('/products', product);

app.listen(PORT, (req, res) => {
    console.log("server running on port: " + PORT);
});

module.exports = app;
