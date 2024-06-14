const mongoose = require("mongoose");

const authdata = new mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required:true,
    },
    
}, {
    timestamps:true,
})

const passwordModel = mongoose.model("passwordModel", authdata);
module.exports = passwordModel;