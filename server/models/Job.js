const mongoose = require('mongoose')
const { model } = require('./Category')
const schema = new mongoose.Schema({
    name:{
        type:String
    },
    area:{
        type:String
    },
    description:{
        type:String
    },
    contact:{
        type:String
    },
    iphone:{
        type:String
    },
    time:{
        type:String
    },
    pay:{
        type:String
    }

})

module.exports  = mongoose.model('Job',schema)