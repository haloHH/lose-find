module.exports = app=>{
    const mongoose = require("mongoose")
    mongoose.connect('mongodb://127.0.0.1:27017/lose-find',{
        useNewUrlParser:true,
        // useUnifiedTopology:true
    }).then(res=>{
        console.log('已连接')
    })
}