const express = require('express');
const app = express();
const Database= require('./Database');
const bodyparser=require('body-parser');
app.use(bodyparser.json());
app.get('/', (req, res) => {
res.status(200).send("welcome");

})


const personrouter=require('./Routes/personRoutes');

app.use('/per',personrouter);


app.listen(800);