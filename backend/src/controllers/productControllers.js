const productoControllers={};

import productModel from "../models/products.js";

productoControllers.getProducts =async(req,res)=>{
    const Products = await productModel.find()
    res.json(Products)
}
productoControllers.insertProducts =async(req,res)=>{
    const {name,desciption, price, stock} = req.body;
    const newProduct = new poroductModel ({name,desciption, price, stock}) 
    await newProduct.save()
    res,json({Message:"products save"})
}
productoControllers.deleteProducts =async(req,res)=>{ 
    await poroductModel.findByIdAndDelete(req.params.id)
    res.json({message:"products delete"})
}
productoControllers.updateProducts= async (req,res)=>{
    const{name,desciption,price,stock}=req.body;
    const updateProducts=await poroductModel.findByIdAndUpdate(req.params.id,{
        name,desciption,price,stock},{new:true});
        res.json({message:"products update"});
}
export default productoControllers; 