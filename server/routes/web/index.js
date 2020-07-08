const Category = require('../../models/Category')
	const multer = require('multer')
module.exports = app =>{
	const express = require('express')
	const router = express.Router({
		mergeParams:true
	})

	const Loseitem = require('../../models/Loseitem')
	const Category = require('../../models/Category')
	const Finditem = require('../../models/Finditem')
	const Ad = require('../../models/Ad')
	const Job = require('../../models/Job')
	const Love = require('../../models/Love')

	router.get('/loseitemes/list',async(req,res)=>{
		const data = await Loseitem.find().limit(10)
		  res.send(data)
	})
	router.get('/finditemes/list',async(req,res)=>{
		const data = await Finditem.find().limit(10)
		  res.send(data)
	})

	router.get('/jobs/list',async(req,res)=>{
		const data = await Job.find().limit(10)
		  res.send(data)
	})

	router.get('/loves/list',async(req,res)=>{
		const data = await Love.find().limit(10)
		  res.send(data)
	})

	router.get('/ads/list',async(req,res)=>{
		const data = await Ad.find().limit(10)
		  res.send(data)
	})

	router.get('/jobs/list',async(req,res)=>{
		const data = await Job.find().limit(10)
		  res.send(data)
	})
	
	router.post('/finditemes',async(req,res)=>{
		const data = await Finditem.create(req.body)
		res.send(data)
	})
	router.post('/jobs',async(req,res)=>{
		const data = await Job.create(req.body)
		res.send(data)
	})
	router.post('/loves',async(req,res)=>{
		const data = await Love.create(req.body)
		res.send(data)
	})
	

	router.get('/categories',async(req,res)=>{
		const parent = await Category.findOne({
			name:'失物招领'
		})

		const cats = await Category.find().where({
            parent:parent                                   //数据库字段parent：上面的parent
        }).lean() 
		  res.send(cats)
	})
	
	//定义文件上传模块
	const upload = multer({
		//dest  上传到哪里
		dest:__dirname+'/../../uploads'
	})
	//upload.single  表示单个文件的上传
	app.post('/web/api/upload',upload.single('file'),async(req,res)=>{
		//加了upload  才有req.file
		const file = req.file
		file.url = `http://localhost:3000/uploads/${file.filename}`
		res.send(file)
	})

	app.use('/web/api',router)
}