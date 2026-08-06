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



// function createSequencer(steps , isLooping = false){
//   let i = 0
//   return{
//     next:function(){
//       if(!isLooping && i===steps.length-1){
//         return steps[i]
//       }
//       if(isLooping && i===steps.length-1){
//         i=0
//         return steps[i]
//       }
//       i++
//       return steps[i]
//     },
//     prev:function(){
//       if(!isLooping && i===0){
//         return steps[i]
//       }
//       if(isLooping && i===0){
//         i=steps.length-1
//         return steps[i]
//       }
//       i--
//       return steps[i]
//     },
//     current:function(){
//       return steps[i]
//     },
//     reset:function(){
//       i=0
//       return steps[i] 
//     }
//   }
// }


// console.log(createSequencer([1,2,3,4,5,6]).next())




function createHistoryTracker(initialValue , maxHistory=5){
  let history = []
  let current = history.push(initialValue) - 1
  console.log(current)
  console.log(history)

  return{
    get:function(){
      return history[current]
    },
    set:function(newValue){
      if(history.length === maxHistory){
        history.shift()
        current = history.push(newValue) - 1
        return current
      }
    },
    undo:function(){
      if(current!=0){
        return history[current--]
      }
    },
    redo:function(){
      if(current != history.length - 1){
        return history[current++]
      }
    },
    getHistory:function(){
      return {...history}
    }
  }
}

const a = createHistoryTracker(2).get()
console.count(typeof a)