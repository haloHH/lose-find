const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name:{                      //投广告的人
        type:String,
        require:true
    },
    ima:{                   //宣传海报
            type:String,
            require:true
    }
})
module.exports = mongoose.model('Ad',schema,'ads')