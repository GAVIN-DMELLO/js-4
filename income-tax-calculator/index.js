const form = document.getElementById('form')
const income = document.getElementById('income')
const taxRate = document.getElementById('tax-rate')

const grossIncome = document.getElementById('gross-income')
const taxSlab = document.getElementById('res-tax-rate')
const payableTax = document.getElementById('payable-tax')
const takeHome = document.getElementById('take-home')
const effTaxRate = document.getElementById('eff-tax-rate')

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  displayTax()
})

function displayTax(){
  grossIncome.textContent = `Gross Income: ${income.value}`

  taxSlab.textContent = `Tax Rate/Slab: ${taxRate.value}%`

  payableTax.textContent = `Total Tax Payable: ${calculateTax()}`

  takeHome.textContent = `Net Take-Home Pay: ${income.value - calculateTax() }`

  effTaxRate.textContent = `Effective Tax Rate: ${taxRate.value}%`

}

function calculateTax(){
  const taxAmount = income.value *(taxRate.value/100)
  return taxAmount
}