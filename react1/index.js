// function UserProfile({name , role , isOnline}){
//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>{role}</p>
//       <span>{isOnline?"Online":"Offline"}</span>
//     </div>
//   )
// }





// const root = document.getElementById('root')

// const rootEl = ReactDOM.createRoot(root)

// rootEl.render(<UserProfile name="Gavin Neel Dmello" role="Frontend Developer" isOnline={true}/>)


function SkillsList({skills=[]}){
  return(
    <ul>
      {skills.map((item)=><li key={item}>{item}</li>)}
    </ul>
  )
}



const root = document.getElementById('root')

const rootEl = ReactDOM.createRoot(root)

rootEl.render(<SkillsList skills={["git" , "js" , "nodejs" , "python"]}/>
)