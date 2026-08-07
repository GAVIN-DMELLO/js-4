function UserProfile({name , role , isOnline}){
  return (
    <div>
      <h1>{name}</h1>
      <p>{role}</p>
      <span>{isOnline?"Online":"Offline"}</span>
    </div>
  )
}





const root = document.getElementById('root')

const rootEl = ReactDOM.createRoot(root)

rootEl.render(<UserProfile name="Gavin Neel Dmello" role="Frontend Developer" isOnline={true}/>)