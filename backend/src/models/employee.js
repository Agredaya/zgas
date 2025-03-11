import { Schema,model } from "mongoose";

const employeeSchema =new Schema({
    name :{
        type: String,
        require :true
    },
    lastName:{
        type : String,
        require: true,
        min:0
    },
    birthday:{
        type:Date,
        require:true,
        min:0
    },
    email:{
        type:String,
        require:true,
        min:0
    },
    address:{
        type:String,
        require:true,
        min:0
    },
    hireDate:{
        type:Date,
        require:true,
        min:0
    },
    password:{
        type:String,
        require:true,
        min:0
    },
    telephone:{
        type:String,
        require:true,
        min:0
    },
    dui:{
        type:String,
        require:true
    },
    isssNumber:{
        type:Number,
        require:true
    },
    isVerified:{
        type:Boolean,
        require:true
        }
},{
    timestamps:true,
    strict:false
})

export default model("employee",employeeSchema)