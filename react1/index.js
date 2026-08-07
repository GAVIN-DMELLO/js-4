function UserProfile({name , role , isOnline}){
  return (
    <div>
      <h1>{name}</h1>
      <p>{role}</p>
      <span>{isOnline?"Online":"Offline"}</span>
    </div>
  )
}





// const root = document.getElementById('root')

// const rootEl = ReactDOM.createRoot(root)

// rootEl.render(<UserProfile name="Gavin Neel Dmello" role="Frontend Developer" isOnline={true}/>)


// function SkillsList({skills=[]}){
//   return(
//     <ul>
//       {skills.map((item)=><li key={item}>{item}</li>)}
//     </ul>
//   )
// }



// const root = document.getElementById('root')

// const rootEl = ReactDOM.createRoot(root)

// rootEl.render(<SkillsList skills={["git" , "js" , "nodejs" , "python"]}/>
// )



// function Card({children}){
//   return (
//     <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
//       {children}
//     </div>
//   )
// }


// function App(){
//   return (
//     <>
//       <Card><UserProfile name="Gavin Neel Dmello" role="Frontend Developer" isOnline={true}/></Card>
//       <Card><UserProfile name="Karan Aujla" role="Ghabru" isOnline={true}/></Card>
//     </>
//   )
// }



// const root = document.getElementById('root')

// const rootEl = ReactDOM.createRoot(root)

// rootEl.render(<App />)

const sampleProducts = [
  { id: 101, name: "Wireless Mouse", price: 25, inStock: true },
  { id: 102, name: "Mechanical Keyboard", price: 80, inStock: false },
  { id: 103, name: "HD Monitor", price: 150, inStock: true }
];



function ProductList({products}){
  return (
    <ul>
      {products.map((item)=>
      {
        return  item.inStock?
        <li key={item.id}>{item.name}-${item.price} <span style={{color:'green'}}>[In Stock]</span> </li>
        :
        <li key={item.id} style={{ textDecoration: 'line-through', color: 'gray' }}>{item.name}-${item.price}
        <span style={{color:'red' , textDecoration:'none'}}>[Out of Stock]</span></li>
      })}
    </ul>
  )
}



 const root = document.getElementById('root')

const rootEl = ReactDOM.createRoot(root)

rootEl.render(<ProductList products={sampleProducts} />)

