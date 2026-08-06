// function createRateLimiter(limit , timeWindowMs){
//   if(limit!=0){
//     return function(){
//       console.log("Action allowed! Calls remaining: X")
//     }
//     limit--
//   }else{
//     console.log("Blocked!Rate limit exceeded")
//   }
// }



function createSequencer(steps , isLooping = false){
  let i = 0
  return{
    next:function(){
      if(!isLooping && i===steps.length-1){
        return steps[i]
      }
      if(isLooping && i===steps.length-1){
        i=0
        return steps[i]
      }
      i++
      return steps[i]
    },
    prev:function(){
      if(!isLooping && i===0){
        return steps[i]
      }
      if(isLooping && i===0){
        i=steps.length-1
        return steps[i]
      }
      i--
      return steps[i]
    },
    current:function(){
      return steps[i]
    },
    reset:function(){
      i=0
      return steps[i] 
    }
  }
}


console.log(createSequencer([1,2,3,4,5,6]).next())