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



function Card({children}){
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
      {children}
    </div>
  )
}


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










// const sampleProducts = [
//   { id: 101, name: "Wireless Mouse", price: 25, inStock: true },
//   { id: 102, name: "Mechanical Keyboard", price: 80, inStock: false },
//   { id: 103, name: "HD Monitor", price: 150, inStock: true }
// ];



// function ProductList({products}){
//   return (
//     <ul>
//       {products.map((item)=>
//       {
//         return  item.inStock?
//         <li key={item.id}>
//           {item.name}-${item.price} 
//           <span style={{color:'green'}}>
//             [In Stock]
//           </span> 
//         </li>
//         :
//         <li key={item.id}>
//           <span style={{ textDecoration: 'line-through', color: 'gray' }}>
//             {item.name}-${item.price}
//           </span>
//           <span style={{color:'red' , textDecoration:'none'}}>
//             [Out of Stock]
//           </span>
//         </li>
//       })}
//     </ul>
//   )
// }



//  const root = document.getElementById('root')

// const rootEl = ReactDOM.createRoot(root)

// rootEl.render(<ProductList products={sampleProducts} />)






// const userGreeting = React.createElement('div' , {id:'container'} , 
//   React.createElement('h1' , {className:'title'} , 'Welcome'),
//   React.createElement('p' , null , 'Logged in as Gavin')
// )




// const userDetails = [
//   { id: 1, label: "Name", value: "Gavin" },
//   { id: 2, label: "Role", value: "Developer" },
//   { id: 3, label: "Status", value: "Active" }
// ];

// function DescriptionList() {
//   return (
//     <dl>
//       {userDetails.map((item) => (
//         <React.Fragment key={item.id}>
//           <dt>{item.label}</dt>
//           <dd>{item.value}</dd>
//         </React.Fragment>
//       ))}
//     </dl>
//   );
// }



//  const root = document.getElementById('root')

// const rootEl = ReactDOM.createRoot(root)

// rootEl.render(<DescriptionList />)







const notifications = [
  { id: 'n1', title: "System Update", message: "v2.0 is live.", type: 'info', unread: true },
  { id: 'n2', title: "Security Alert", message: "New login detected.", type: 'warning', unread: true },
  { id: 'n3', title: "Welcome!", message: "Thanks for joining.", type: 'success', unread: false }
];



function NotificationCenter({items=[]}){

  if(items.length===0){
    return <p>No notifications available</p>
  }

  return (
    <Card>
      {items.map((item)=>(
        <NotificationItem 
          key={item.id}
          title={item.title}
          message={item.message}
          type={item.type}
          unread={item.unread}
        />
      ))}
    </Card>
  )
}

const bgColors = {
  info: '#e0f7fa',
  warning: '#fffde7',
  success: '#e8f5e9'
};

function NotificationItem({ title, message, type, unread }) {
  return (
    <div style={{ 
      backgroundColor: bgColors[type] || '#f5f5f5', 
      padding: '12px', 
      borderRadius: '6px', 
      marginBottom: '10px' 
    }}>
      <h4 style={{ margin: '0 0 4px 0' }}>
        {title} {unread && <span style={{ color: 'red', fontWeight: 'bold' }}>[NEW]</span>}
      </h4>
      <p style={{ margin: 0, color: '#333' }}>{message}</p>
    </div>
  );
}












const root = document.getElementById('root')

const rootEl = ReactDOM.createRoot(root)

rootEl.render(<NotificationCenter items={notifications} />)