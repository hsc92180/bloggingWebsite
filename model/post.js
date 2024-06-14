const mongoose = require("mongoose");

const postdata = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: false,
        default:"lorem ipsum"
    },
    tags: {
        type: Array,
        required: true,
        default:[]
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref:"passwordModel"
    },
    comments: [
        {
            comment: {
                type: String,
            },
            date: {
                type: Date,
                default:new Date(),
            },
            userId: {
                type: mongoose.Schema.Types.ObjectId,
            }
        }
    ]
    
},{timestamps:true})

const postmodel = mongoose.model("postmodeel", postdata);
module.exports = postmodel;