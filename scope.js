
console.log(`global scope -> ${a}`)

if(1){
  let a = 10
  console.log(`block scope -> ${a}`)
}

(function(){
  
  console.log(`functional scope -> ${a}`)
})()

