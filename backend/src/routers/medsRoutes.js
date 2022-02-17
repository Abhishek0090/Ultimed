const express = require("express");
const MedsModel = require("../models/meds");

const router = express.Router();

//WE WILL HANDLE POST REQUEST
router.post("/meds", async (req,res)=>{
    try{
        const addmeds = new MedsModel(req.body)
        console.log(addmeds);
        const insertmeds = await addmeds.save();
        res.status(201).send(insertmeds);
    }catch(e){
         res.status(400).send(e)       
    }
})

//we will handle get request of our page
router.get("/meds", async (req,res)=>{
    try{
       const getMeds = await MedsModel.find({}).sort({"id":1})
        res.send(getMeds);
    }catch(e){
         res.status(400).send(e)       
    }
})

//we will handle get request of individual data
router.get("/meds/:id", async (req,res)=>{
    try{
        const _id = req.params.id;
       const getMed = await MedsModel.findById(_id);
        res.send(getMed);
    }catch(e){
         res.status(400).send(e)       
    }
})

//finding by name 
router.get('/meds/:name',async(req,res)=>{
    try{
        const _name = req.params.name;
        const getMedName = await MedsModel.findByName(_name);
        res.send(getMedName);

    }catch(e){
        res.status(400).send(e);
    }
})

//update a single item
router.patch("/meds/:id", async (req,res)=>{
    try{
        const _id = req.params.id;
       const getMed = await MedsModel.findByIdAndUpdate(_id,req.body,{
           new : true
       });
        res.send(getMed);
    }catch(e){
         res.status(500).send(e)       
    }
})

//we will delete database elements
router.delete("/meds/:id",async (req,res)=>{
try{
    const deleteMeds = await MedsModel.findByIdAndDelete(req.params.id)
    if(!req.params.id){
        return res.status(400).send();
    }
    res.send(deleteMeds)
}catch(e){
    res.status(500).send(e)
}
})




module.exports = router