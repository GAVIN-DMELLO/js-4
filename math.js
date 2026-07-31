const num = 19.4
const num2 = Math.ceil(num)
console.log(num2)

const num3 = Math.floor(num)
console.log(num3)

const num4 = Math.round(num)
console.log(num4)


const vaporfly = 250;
const alphafly = 285;
const adiosPro = 210;


const max = Math.max(vaporfly , alphafly , adiosPro)
const min = Math.min(vaporfly , alphafly , adiosPro)
console.log(max , min)



const entryPrice = 64500;
const exitPrice = 63200;

const diff = Math.abs(entryPrice - exitPrice)
console.log(diff)


const root = Math.sqrt(144)
console.log(root)

const square = Math.pow(2,8)
console.log(square)



function getRandomInt(min , max){
  return Math.floor(Math.random()*(max-min+1))+min
}

console.log(getRandomInt(1,10))


