const items = ["Mechanical Keyboard", "Wireless Mouse", "USB-C Hub"];
const total = "$185.00";

const cartSummary = document.getElementById('cart-summary')

cartSummary.innerHTML = `<h2>Your Order : </h2>
                         <li><ul>${items[0]}</ul><ul>${items[1]}</ul><ul>${items[2]}</ul></li><p>${total}</p>`