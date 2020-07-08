const mongoose = require('mongoose')
const schema = new mongoose.Schema({
        name:{
            type:String
         },    
        toname:{
            type:String
        },
        description:{
            type:String
        },
        icon:{
            type:String
        },
        time:{
            type:String
        }
})

module.exports = mongoose.model('Love',schema)