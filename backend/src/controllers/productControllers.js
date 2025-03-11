const productoControllers={};

import productModel from "../models/products.js";

productoControllers.getProducts =async(req,res)=>{
    const Products = await productModel.find()
    res.json(Products)
}
productoControllers.insertProducts =async(req,res)=>{
    const {name,desciption, price, stock} = req.body;
    const newProduct = new productModel ({name,desciption, price, stock}) 
    await newProduct.save()
    res.json({message:"products save"})
}
productoControllers.deleteProducts =async(req,res)=>{ 
    const santiago = await productModel.findByIdAndDelete(req.params.id)
    if (!santiago)res.json({message: "no se encontro el santiago"});
    res.json({message:"products delete"})
}
productoControllers.updateProducts= async (req,res)=>{
    const{name,desciption,price,stock}=req.body;
    const updateProducts=await productModel.findByIdAndUpdate(req.params.id,{
        name,desciption,price,stock},{new:true});
        res.json({message:"products update"});
}
export default productoControllers; 