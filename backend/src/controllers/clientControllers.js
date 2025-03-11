const clientControllers={};

import clientModel from "../models/clients.js";

clientControllers.getClients =async(req,res)=>{
    const Products = await clientModel.find()
    res.json(Products)
}
clientControllers.insertClients =async(req,res)=>{
    const {name,lastName,birthday,email,password,telephone,dui,isVerified} = req.body;
    const newClient = new clientModel ({name,lastName,birthday,email,password,telephone,dui,isVerified}) 
    await newClient.save()
    res.json({message:"Client save"})
}
clientControllers.updateClients =async(req,res)=>{ 
    const santiago = await clientModel.findByIdAndDelete(req.params.id)
    if (!santiago)res.json({message: "no se encontro el santiago"});
    res.json({message:"Clients delete"})
}
clientControllers.deleteClients= async (req,res)=>{
    const{name,lastName,birthday,email,password,telephone,dui,isVerified}=req.body;
    const updateClients=await clientModel.findByIdAndUpdate(req.params.id,{name,lastName,birthday,email,password,telephone,dui,isVerified},{new:true});
        res.json({message:"Clients update"});
}
export default clientControllers; 