const express = require('express')

const app = express()

app.use(require('cors')())
app.set('secret','ads23sa21')
//中间件   这个一定要加，不然访问不到req.body的东西
app.use(express.json())

//给admin前端进行静态托管
app.use('/admin',express.static(__dirname + '/admin'))

//给web前端进行静态托管到根路径
app.use('/',express.static(__dirname + '/web'))

app.use('/uploads',express.static(__dirname+'/uploads'))



require('./routes/admin')(app)
require('./plugins/db')(app)
require('./routes/web')(app)

app.listen(3000,()=>{
    console.log("监听中");
})