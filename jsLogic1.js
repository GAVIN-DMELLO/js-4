function isEvenOrOdd(num){
  if(num%2===0){
    return "Even"
  }else{
    return "Odd"
  }
}

const ans = isEvenOrOdd(0)
console.log(ans)



function findLargest(a , b , c){
  if(a>b && a>c)
  {
    return a
  }
  else if(b>a && b>c)
  {
    return b
  }
  else if(c>a && c>b)
  {
    return c
  }
}

const largest = findLargest(3 , 4 ,1)
console.log(largest)



function sumArray(arr){
  let sum = 0
  for(let num of arr){
    sum+= num
  }
  return sum
}


const sum = sumArray([1,2,3,4])
console.log(sum)


function countVowels(str){
  let count = 0
  for(let letter of str){
    if(letter==='a' || letter==='e' || letter==='i' || letter==='o' || letter==='u' || letter==='A' || letter==='E' || letter==='I' || letter==='O' || letter==='U'){
      count++
    }
  }
  return count
}


const vowels = countVowels("gavin")
console.log(vowels)



function reverseString(str){
  let newStr = ""
  for(let i=str.length-1 ; i>=0 ;i--){
    newStr += str[i]
  }
  return newStr
}

const reverse = reverseString("react")
console.log(reverse)