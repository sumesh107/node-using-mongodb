import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const PORT = 4000;

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/productsdb').then(()=>{
        console.log(" Mongo connection succesfull ");

}).catch((err)=>{
    console.log(" eda errror : "+ err);
})

const db = mongoose.connection

