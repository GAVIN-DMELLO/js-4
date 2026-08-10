let promo = 'SUM-2024'

// function isValidPromoCode(promo){
//   if(promo.length!=8){
//     return "Not Valid Promo code"
//   }

//   const firstHalf = promo.slice(0 , 3)
//   console.log(firstHalf)

//   const middle = promo.slice(3,4)
//   console.log(middle)

//   const end = promo.slice(4,promo.length)
//   console.log(end)

//   if(firstHalf.length!=3 || (firstHalf != firstHalf.toUpperCase())){
//     return "invalid firsthalf"
//   }

//   if(middle.length!=1 || middle != '-'){
//     return "Inavlid middle"
//   }

//   if(end.length!=4 || isNaN(Number(end))){
//     return "invalid end"
//   }

//   return 'valid promo code'


// }

// console.log(isValidPromoCode(promo))


function isValidPromocode(promo){
  return /^[A-Z]{3}-\d{4}$/.test(promo)
}

console.log(isValidPromocode(promo))