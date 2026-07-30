const productGrid = document.getElementById('product-grid')
const div = document.createElement('div')
div.classList.add('product-card')
const header = document.createElement('h3')
const para = document.createElement('p')

header.textContent = "Wireless Headphones"
para.textContent = "$99.00"

productGrid.append(div)
div.append(header , para)