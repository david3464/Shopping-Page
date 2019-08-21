const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require('./routes/api/items');

const app = express();

//BodyParser Middleware
app.use(bodyParser.json());

//DB Config
const db  = require('./config/keys').mongoURI

//Connect to Mongodb
mongoose.connect('mongodb+srv://d123:421173464@cluster0-ptood.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
if (!err) { console.log('MongoDB Connection Succeeded.') }
else { console.log('Error in DB connection : ' + err) }
});

//Use Routes
app.use('api/items', items);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server started on Port ${port}...`));
  
