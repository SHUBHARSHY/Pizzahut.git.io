const authController = require("../app/http/controllers/authController")
const cartController = require("../app/http/controllers/customers/cartController")
const homeController = require("../app/http/controllers/homeController")
const {login,register}= authController()
const {index}= homeController()
const {cart} =cartController()


function initRoutes(app){
    
    app.get("/",index)
    app.get("/cart",cart)
    app.get("/login",login)
    app.get("/register",register)
}


module.exports= initRoutes