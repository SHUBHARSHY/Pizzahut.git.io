const Axios = require("axios")
let addToCart = document.querySelectorAll('.add-to-cart')
async function updateCart (pizza){
    //
  const data =await Axios.post('/update-cart',pizza)
  console.log(data)
}

addToCart.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
// console.log(e)
let pizza = JSON.parse(btn.dataset.pizza)
updateCart(pizza)
// console.log(pizza)

//


    })
})