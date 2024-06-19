const express = require('express');
const app = express();
const Database= require('./Database');
const bodyparser=require('body-parser');
require('dotenv').config();
app.use(bodyparser.json());
app.get('/', (req, res) => {
res.status(200).send("welcome");

})


const personrouter=require('./Routes/personRoutes');

app.use('/per',personrouter);

const Port=process.env.port || 3000;
app.listen(Port,()=>{
    console.log('listening on port 3000');
});