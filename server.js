const express = require("express")
const initRoutes = require('./routes/web')
const app = express()
const port = process.env.PORT || 4000
const ejs = require("ejs")
const expressLayout = require("express-ejs-layouts")
const path = require("path")
const viewpath = path.join(__dirname,"/resources/views")
const mongoose = require("mongoose")
const session = require('express-session')
const DotEnv = require('dotenv').config()


//Database connection

const url = "mongodb://127.0.0.1:27017/pizza";
// mongoose.connect(url,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:true}).then(()=>{console.log("Database connected...")}).catch((err)=>{
mongoose.connect(url).then(()=>{console.log("Database connected...")}).catch((err)=>{
    console.log("error")
})

// const connection = mongoose.connection
// connection.once("open",()=>{
//     console.log("Database connected...")
// }).catch(err=>{
//     console.log("connection failed....")
// })

//session config
app.use(session({
    secret:process.env.COOKIE_SECRET,
    resave:false,
    saveUninitialized:false,
    cookie:{maxAge:1000*60*60*24} //24 hours
}))


//Assets
app.use(express.static("public"))




// set Template engine
app.use(expressLayout)
app.set("views",viewpath)
app.set("view engine","ejs")


initRoutes(app)



app.listen(port,()=>{console.log(` Listening on port ${port}`)})

