const mongoose=require('mongoose');


const newdata=new mongoose.Schema({
name:{
   type:String,
    required:true,
},
age:{
    type:Number,
    required:true,
},
salary:{
    type:Number,
    default:10000000
},
profession:{
    type:String,
    enum:['front-end','back-end','full-stack','react-developer','nodejs']
},
location:{
    type:String,
}
})


const Persondata=mongoose.model('Personndata',newdata);
module.exports=Persondata;
