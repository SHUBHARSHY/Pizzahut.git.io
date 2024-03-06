const express = require("express")

const app = express()
const port = process.env.PORT || 4000
const ejs = require("ejs")
const expressLayout = require("express-ejs-layouts")
const path = require("path")
const viewpath = path.join(__dirname,"/resources/views")

//Assets
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render('home')
})


// set Template engine
app.use(expressLayout)
app.set("views",viewpath)
app.set("view engine","ejs")
app.listen(port,()=>{console.log(` Listening on port ${port}`)})