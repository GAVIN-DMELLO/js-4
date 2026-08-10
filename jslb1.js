console.log("Hello World")

function sum( num1 , num2){
  console.log(num1 + num2)
}

sum(1 , 2)
sum(-1,3)
sum(0.1 , 0.2)

function areaOfRectangle(length , width){
  if(typeof length === 'string' || typeof width === 'string'){
    throw new Error("not a valid input. please enter a number")
  }
  if(length<=0 || width<=0){
    throw new Error("please enter non negative values")
  }
  console.log(Math.abs(length * width))
}

areaOfRectangle(3 , 4)
areaOfRectangle(0 , 4)
areaOfRectangle(3 , 0)
// areaOfRectangle(3 , -4)
// areaOfRectangle(-3 , 4)
// areaOfRectangle(-3 , -4)
areaOfRectangle("3" , 4)
