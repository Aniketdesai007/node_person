const mongoose=require('mongoose');
require('dotenv').config();
const dataurl=process.env.databaseurl;
//const mongooseurllocal='mongodb://localhost:27017/Persondatabase';
const mongooseurl=dataurl;
mongoose.connect(mongooseurl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const db=mongoose.connection;


db.on('error', (err) => {
    console.log('having error while connecting to mongodb server ',err);
})
db.on('connected',()=>{
    console.log('sucessfully connected to mongodb server');

})
db.on('disconnected',()=>{
    console.log('sucessfully disconnected to mongodb server');
    
})
module.exports =db;