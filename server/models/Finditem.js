const mongoose = require('mongoose')

 const schema = new mongoose.Schema({
     name:{
         type:String
     },
     icon:{
         type:String
     },
    //  categories:[
    //      {
    //          type:mongoose.SchemaTypes.ObjectId,
    //         ref:'Category'
    //         }],
    categories:
              {
                  type:String
                 },
      area:{
          type:String
      },
      time:{
          type:Date
      },
      description:{
          type:String
      },
      contact:{
          type:String
      },
      iphone:{
        type:Number
      }
 })

 module.exports = mongoose.model('Finditem',schema,'finditemes')