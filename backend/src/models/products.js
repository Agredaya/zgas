
import { Schema,model } from "mongoose";

const productoSchema =new Schema({
    name :{
        type: String,
        require :true
    },
    description:{
        type : String,
        require: true,
        min:0
    },
    stock:{
        type:Number,
        require:true,
        min:0
    }
},{
    timestamps:true,
    strict:false
})

export default model("products",productoSchema)