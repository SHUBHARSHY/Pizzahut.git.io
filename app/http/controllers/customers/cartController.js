function cartController(){

    return {
        cart:(req,res)=>{
            res.render('customers/cart')
        },
       update1: (req,res)=>{
            return res.json({data:"all ok"})
        }
       }
    

}

module.exports = cartController