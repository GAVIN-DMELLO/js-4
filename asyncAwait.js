// async function fetchIAMarks(usn){
//   try{
//     const response = await fetch(`api/marks/${usn}`)
//     const data = await response.json()
//     console.log("Marks loaded:" , data)
//     return data
//   }catch(error){
//     console.log(error)
//   }
// }

// fetchIAMarks(1)








// async function getStudentProfile(id) {
//   try{
//     const response = await fetch(`/api/students/${id}`)
//     if(!response.ok){
//       throw new Error("Student not found")
//     }
//     const data = await response.json()
//     return data
//   }catch(error){
//     console.error(error)
//   }
// }

// getStudentProfile(1)



// async function getCompleteReport(usn) {
//   try{
//   const [bio , apt] = await Promise.all([fetchBioMarks(usn) , fetchAptMarks(usn)])
//   return {bio:bio , apt:apt}
//   }catch(error){
//     console.log(error)
//   }
// }

// getCompleteReport(1)






// async function getStudentMarks(usn , isCached) {
//   if(isCached){
//     return { source: "cache", data: "100%" }
//   }else{
//     const resp = await fetchFromDatabase(usn)
//     return resp
//   }
// }

// getStudentMarks(1,true)



async function dispatchIAReport(usn) {
  try{
    const response = await fetch(`/api/dashboard/marks/${usn}`)

    if(!response.ok){
      throw new Error("Failed to fetch marks for USN: " + usn)
    }

    const data = await response.json()

    const resp2 = await sendNodemailerReport(data.email, data.marks)

    if(response.ok && resp2.ok){
      return true
    }

  }catch(error){
    console.error(error)
    return false
  }
}

dispatchIAReport(1)