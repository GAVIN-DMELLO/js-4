const form = document.getElementById('form')
const income = document.getElementById('income')

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
  grossIncome.textContent = ` ${income.value}`

  taxSlab.textContent = `${calculateTax().taxRate}%`

  payableTax.textContent = `${calculateTax().taxAmount}`

  takeHome.textContent = `${income.value - calculateTax().taxAmount }`

  effTaxRate.textContent = `${calculateTax().taxRate}%`

}

function calculateTax(){
  let taxAmount = null
  let additional = null
  if(income.value>0 && income.value<1200000){
    taxAmount = {taxAmount : 0 , taxRate:0}
  }
  else if(income.value<1600000){
    taxAmount = {taxAmount : ((income.value-1200000) *(15/100)), taxRate:15}
  }
  else if(income.value<2000000){
    taxAmount = {taxAmount : (((income.value-1200000)-400000)*(20/100) + 60000), taxRate:20}
  }
  else if(income.value < 2400000){
    taxAmount = {taxAmount : ((((income.value-1200000)-800000))*(25/100) + 60000 + 80000), taxRate:25}
  }
  else if(income.value>2400000){
    taxAmount = {taxAmount : ((income.value-2400000) *(30/100)+60000+80000+100000), taxRate:30}
  }
  return taxAmount
  console.log(taxAmount)
}