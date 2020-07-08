module.exports = app=>{
	const express = require('express')
	const multer = require('multer')
	const jwt = require('jsonwebtoken')
	const assert = require('http-assert')
	// const router = express.Router()
	const Category = require('../../models/Category')
	const Loseitem = require('../../models/Loseitem')
	const AdminUser = require('../../models/AdminUser')
	//合并URL参数，将父级的参数合并到router里面
	const router = express.Router({
		mergeParams:true
	})

	//分类
	//新建分类
// 	router.post('/categories',async(req,res)=>{
// 		const model = await Category.create(req.body)
// 		console.log(model)
// 		res.send(model)
// 	})

// 	//删除分类
// 	router.delete('/categories/:id',async(req,res)=>{
// 		const model = await Category.findByIdAndDelete(req.params.id,req.body)
// 		res.send({
// 			success:true
// 		})
// 	})

// 	//修改分类
// 	router.put('/categories/:id',async(req,res)=>{
// 		const model = await Category.findByIdAndUpdate(req.params.id,req.body)
// 		res.send(model)
// 	})

// 	//查
// 	router.get('/categories',async(req,res)=>{
// 		const items = await Category.find().limit(10)
// 		console.log(items)
// 		res.send(items)
// 	})

// 	router.get('/categories/:id',async(req,res)=>{
// 		const model = await Category.findById(req.params.id)
// 		res.send(model)
// 	})
	
// //失物
// 	// 新增失物
// 	router.post('/loseitemes',async(req,res)=>{
// 		const model = await Loseitem.create(req.body)
	
// 		res.send(model)
// 	})

// 	//修改失物
// 	router.put('/loseitemes/:id',async(req,res)=>{
// 		const model = await Loseitem.findByIdAndUpdate(req.params.id,req.body)
// 		res.send(model)
// 	})

// 	//查看
// 	router.get('/loseitemes',async(req,res)=>{
// 		const items = await Loseitem.find().limit(10)
// 		res.send(items)
// 	})
	// app.use('/admin/api',router)




	//增
	router.post('/',async(req,res)=>{
		const model = await req.Model.create(req.body)
		console.log(model)
		res.send(model)
	})

	//删
	router.delete('/:id',async(req,res)=>{
		const model = await req.Model.findByIdAndDelete(req.params.id,req.body)
		res.send({
			success:true
		})
	})

	//改
	router.put('/:id',async(req,res)=>{
		const model = await req.Model.findByIdAndUpdate(req.params.id,req.body)
		res.send(model)
	})

	//查
	router.get('/',async(req,res)=>{
		const queryOptions = {}
        if(req.Model.modelName === 'Category'){
            queryOptions.populate = 'parent'
        }
        const items = await req.Model.find().setOptions(queryOptions).limit(10)
		//  const items = await req.Model.find().limit(10)
		res.send(items)
	})
	router.get('/:id',async(req,res)=>{
		const model = await req.Model.findById(req.params.id)
		res.send(model)
	})


	app.post('/admin/api/login',async(req,res)=>{
		const {username,password} = req.body

		const user = await AdminUser.findOne({
			username:username
		}).select('+password')
		assert(user,422,'用户不存在')
		const isVaild =  require('bcrypt').compareSync(password,user.password)
		assert(isVaild,422,'密码错误')
		const token = jwt.sign({
			id:user._id		
		},app.get('secret'))
			res.send({token})
		
		})



	//动态获取接口resource，中间件处理请求模板
	app.use('/admin/api/rest/:resource',async(req,res,next)=>{
		const modelName = require('inflection').classify(req.params.resource)
		// req.Model是在请求对象上挂载Model属性
		req.Model = require(`../../models/${modelName}`)
		next()
	},router)

	//定义文件上传模块
	const upload = multer({
		//dest  上传到哪里
		dest:__dirname+'/../../uploads'
	})
	//upload.single  表示单个文件的上传
	app.post('/admin/api/upload',upload.single('file'),async(req,res)=>{
		//加了upload  才有req.file
		const file = req.file
		file.url = `http://localhost:3000/uploads/${file.filename}`
		res.send(file)
	})
	

}