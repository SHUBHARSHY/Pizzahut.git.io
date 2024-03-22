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
const flash = require("express-flash")
const MongoDbStore = require("connect-mongo")(session)
// const MongoStore = MongodbStore(session)


const url1 = "mongodb://127.0.0.1:27017/pizza"

//Database connection

mongoose.connect(url1, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Connection failed...')
});



//SESSION STORE 

let mongoStore = new MongoDbStore({
    mongooseConnection: connection,
    collection: 'sessions'
})





//session config

app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    store: mongoStore,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // 24 hour
    
}))

 


app.use(flash())

//Assets
app.use(express.static("public"))




// set Template engine
app.use(expressLayout)
app.set("views",viewpath)
app.set("view engine","ejs")


initRoutes(app)


app.listen(port,()=>{console.log(` Listening on port ${port}`)})

