const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name:{
        type:String
    },
    parent:{
        //数据库里面的ID叫Objectid，ref表示关联的模型
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Category'
    }
})

module.exports = mongoose.model('Category',schema)