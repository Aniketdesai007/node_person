const express= require('express');
const Persondata= require("../models/Persondata")

const router=express.Router();


router.post('/',async(req,res)=>{
    try {
      const data=req.body;
    const newdata=new Persondata(data);
    const savedata=await newdata.save(); 
    console.log('data saved successfully ....');
    res.status(200).json(newdata);
   
    } catch (error) {
         console.log('error occured .....',error);
      res.status(500).json(error);
      }
 })
  

 //update in node js

 router.put('/:id',async(req,res)=>{
    try {
        const personid=req.params.id;
        const updationdata=req.body;
        const update=await Persondata.findByIdAndUpdate(personid,updationdata,{
            new:true,
            runValidators:true
        });

        if(!update){
            res.status(404).json('data not found');
        }
        console.log('data updated successfully ....');
        res.status(200).json(update);
    } catch (error) {
        console.log('error occured .....',error);
        res.status(500).json(error);
    }

 })

 router.delete('/:id',async (req,res)=>{
try {
    const deletionid=req.params.id;
    const del=await Persondata.findByIdAndDelete(deletionid);
    if(!del){
        res.status(404).json('data not found');
    }
    console.log('data deleted successfully ....');
    res.status(200).json(del);
} catch (error) {
            console.log('error occured .....',error);
        res.status(500).json(error);
}
 })
  
  
  
  //query params (passing parameter after end point)
  router.get('/:profession', async(req, res) => {
  try {
    const profession=req.params.profession;
    if(profession=='full-stack'||profession=='nodejs'||profession=='react-developer'||profession=='back-end'||profession=='front-end'){
      const response=await Persondata.find({profession:profession});
      console.log('all data  fetch successfully ....');
      res.status(200).json(response);
    }
    else{
      res.status(500).json('invalid profession');
    }
  } catch (error) {
  
    console.log('error occured .....');
    res.status(500).json(error);
  }
  
  })
  
  
  router.get('/', async(req, res)=>{
      try {
        const alldata=await Persondata.find();
        console.log('all data saved fetch successfully ....');
        res.status(200).json(alldata);
      } catch (error) {
        console.log('error occured .....');
        res.status(500).json(error);
       
      }
  })
  

  module.exports=router;