function showCart() {
    const btnCart = document.querySelector('.btn--cart')
    const cart = document.querySelector('.cart')
  
    btnCart.addEventListener('click', function () {
      cart.classList.toggle('show--cart')
    })
  
    cart.addEventListener('click', function (e) {
      if (e.target.closest('.btn--close')) {
        cart.classList.remove('show--cart')
      }
    })
  }
  
/*DESCUENTO*/

// Obtener referencias a los elementos del DOM
const discountInput = document.getElementById('discountInput');
const applyDiscountButton = document.querySelector('.btn--apply-discount');
const taxInput = document.getElementById('taxInput');
const applyTaxButton = document.querySelector('.btn--apply-tax');
const cartTotalItem = document.querySelector('.cart__total--item');

// Variable para almacenar el total del carrito
let cartTotal = 0;


  export default showCart
  
