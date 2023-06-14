const mongoose =require('mongoose')

const todoschema =new mongoose.Schema({
    text:{
        type:String,
        require:true
    }
})

module.exports =mongoose.model('ToDo',todoschema)