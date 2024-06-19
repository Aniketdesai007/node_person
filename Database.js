const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Persondatabase');
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