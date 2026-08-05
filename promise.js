// function checkTharPrice(){
//   return new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//       resolve("Thar ROXX on-road price in Mangalore: ₹18,00,000")
//     },1500)
//   })
// }



// checkTharPrice().then((res)=>{
//   console.log(res)
// })





// const iaMarks = {
//   studentName : "Gavin",
//   bio:20,
//   apt:15
// }

// const jsonDatabaseEntry = JSON.stringify(iaMarks)
// console.log(jsonDatabaseEntry)

// const parsedData = JSON.parse(jsonDatabaseEntry)
// console.log(parsedData)

// console.log(parsedData.apt)





// function analyzeChart(){
//   return new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//       const random = Math.random()
//       console.log(random)
//       if(random>0.5){
//         resolve("Success: Rising wedge pattern identified")
//       }else{
//         reject("Error: Failed to load chart data")
//       }
//     },1000)
//   })
// }


// analyzeChart()
// .then((data)=>{
//   console.log(data)
// })
// .catch((error)=>{
//   console.log(error)
// })
// .finally(()=>{
//   console.log("Scanner disconnected")
// })





// function fetchStudentData(id){
//   return new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//       resolve(
//         { id: id, name: "Gavin", status: "Marks Verified" }
//       )
//     },1000)
//   })
// }


// function sendEmailReport(studentObject){
//   return new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//       resolve("Personalized IA1 report sent to " + studentObject.name)
//     },1000)
//   })
// }


// fetchStudentData(1)
// .then((studentObject)=>{return sendEmailReport(studentObject)})
// .then((message)=>{console.log(message)})




function fetchInventory(){
  return new Promise((resolve , reject)=>{
    setTimeout(()=>{
      resolve('{"model": "Nike Alphafly", "lifespan_km": 600, "inStock": true}')
    },1000)
  })
}


fetchInventory()
.then((json)=>{
  return JSON.parse(json)
})
.then((parsedObject)=>{
  if(parsedObject.lifespan_km===500){
    return "Time to rotate shoes!"
  }
  else{
    throw new Error("Invalid Inventory data")
  }
})
.then((res)=>{
  console.log(res)
})
.catch((error)=>{
  console.log(error)
})