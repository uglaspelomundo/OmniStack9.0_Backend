const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');


const app = express();

//mongoose.connect('mongodb+srv://teste:teste123@omnistack-n3ytn.mongodb.net/mydatabase?retryWrites=true&w=majority', {
mongoose.connect('mongodb://localhost:27017/princedb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).catch(error => console.log(error))

app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333);