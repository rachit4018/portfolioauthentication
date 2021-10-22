const express = require('express') // importing express framework
const path = require('path') //importing path module
const app = express() // creating application

// to connect mustache templating engine
app.set('views', path.join(__dirname,'views')) //setting template directory
// app.set('view engine','mustache') //setting mustache as view engine
// app.engine('mustache', require('hogan-middleware').__express)// hogan middlware fot express
// //to run mustache templating engine (express route structure)
// app.get('/home', (req,res, next)=>{

// 	res.render('home',null)
// })
// app.set('view engine','jade') //setting jade as view engine
// //to run jade templating engine (express route structure)
// app.get('/index', (req,res, next)=>{

// 	res.render('index',null)
// })

app.set('view engine','ejs')
app.use(express.static('public'));
app.use(express.static('images'));
// app.get('/index', (req, res, next)=>{

// 	res.render('index')
// })

// app.get('/', (req, res, next)=>{

// 	res.send('Hello!!')
// })  //rquest handling

// app.get('/json', (req, res, next)=>{

// 	const data ={
// 		greeting: 'Hello!!'
// 	}
// 	res.json(data)
// }) //rendering json content

const indexRouter = require('./routes')
app.use('/', indexRouter)

app.listen(3000) //3000 is port number