const date = new Date()
console.log(date.getFullYear())

const date2 = new Date(2026 , 11 , 25 )
console.log(date2)
console.log(date2.getDay())



const date3 = new Date()
console.log(date3)

date3.setFullYear(2030)
console.log(date3)


const date4 = Date.now()
console.log(date4)

const date5 = new Date(1785653838222)
console.log(date5)



const date6 = new Date()
console.log(date6.toLocaleString())
console.log(date6.toISOString())


const launchDate = new Date(2025 , 9 , 15)
console.log(launchDate.toLocaleString())


let date7 = new Date(2026 , 0 , 31)
console.log(date7.toLocaleString())

const date8 = date7.getDate()
console.log(date8)

const date9 = date7.setDate(date8 + 30)
console.log(date7.toLocaleString())
