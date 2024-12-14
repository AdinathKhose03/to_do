const mongoose = require("mongoose");
const types = require("./types");

mongoose.connect("MongoDB connection string")

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:{
        type:Boolean,
        default:false,
    }
})

const todo = mongoose.model('todo', todoSchema);

module.exports = {
    todo
}
