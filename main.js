import cart from './cart.js';
import loader from './loader.js';
import products from './products.js';
import showCart from './showCart.js';
import showMenu from './showMenu.js';
import getProducts from './getProducts.js';

/* UI Elements */

/* Hidden loader */
loader()

/* Show Menu */
showMenu()

/* Show Cart */
showCart()

/* End UI Elements */

/* Products */
const { db, printProducts } = products(await getProducts())

/* Cart */
cart(db, printProducts)
/* DARKMODE */
const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;

toggleBtn.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});






