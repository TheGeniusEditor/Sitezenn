const { registerHelper } = require("hbs");
const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    fullname : {
        type : String,
        required : true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    businessname:{
        type: String,
        required: false
    },
    phone: {
        type:Number,
        required:true,
        unique:true
    },
    service:{
        type: String,
        required : true
    }

})

const User = new mongoose.model("User", employeeSchema);

module.exports = User;