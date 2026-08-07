function UserProfile(props){
  return (
    <div style={props.style}>
      <h1>Gavin Neel Dmello</h1>
      <p>Frontend Developer</p>
    </div>
  )
}





const root = document.getElementById('root')

const rootEl = ReactDOM.createRoot(root)

rootEl.render(<UserProfile style={{padding:"16px" , backgroundColor:"#f4f4f4"}}/>)