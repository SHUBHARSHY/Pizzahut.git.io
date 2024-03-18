
const Menu = require("../../models/menu")
function homeController(){

    return {
        index:async (req,res)=>{
            try {
                const pizzas = await Menu.find()
                console.log(pizzas)
                res.render('home',{pizzas:pizzas})
            } catch (error) {
                
            }
        }
    }

}

module.exports = homeController