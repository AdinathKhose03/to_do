const mongoose = require("mongoose");
const types = require("./types");

mongoose.connect("mongodb+srv://adinathkhose03:bdEdwYI0qPzQaT13@cluster0.gdfto.mongodb.net/")

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:{
        types:Boolean,
        default:false
    }
})

const todo = mongoose.model('todo', todoSchema);

module.exports = {
    todo
}
