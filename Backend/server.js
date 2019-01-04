var express = require('express');  
var path = require("path");   
var bodyParser = require('body-parser');  
var mongo = require("mongoose"); 
var cors= require('cors');
const route =require('./routes/route');
var ejs=require('ejs');
var EventEmitter = require('events').EventEmitter;
  
var app =express();
 //connent to mongodb
 mongo.connect('mongodb://localhost:27017/AngularPreview');
 //on connection
 mongo.connection.on('connected',()=>{
     console.log("Connected to mongoDb @27017");
 });
 mongo.connection.on('error',(err)=>{
     if(err){
         console.log("Error in Database Connection"+err);
     }

 });

app.use(bodyParser());  
app.use(bodyParser.json({limit:'5mb'}));   
app.use(bodyParser.urlencoded({extended:true}));  

app.use(function (req, res, next) {        
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
    res.setHeader('Access-Control-Allow-Credentials', true);       
    return next();  
});  

//port 
var port =3000;
//adding a middleware
app.use(cors());
//body-parser
app.use(bodyParser.json());
//routes
app.use('/api',route);
//static files
app.use(express.static(path.join(__dirname,'public')));


//testing 
app.get('/',(req,res)=>{
 res.send("Hello");

})

app.listen(port,()=>{
    console.log("Server started at port number "+port);
});