

// const h1 = document.createElement('h1')
// h1.textContent = "hello coder army"
// h1.className = 'element'
// h1.id = 'first'
// h1.style.fontSize = '30px'
// h1.style.backgroundColor = 'orange'
// h1.style.color = 'white'


// const h2 = document.createElement('h2')
// h2.textContent = "Strike is launched"
// h2.className = 'element'
// h2.id = 'second'
// h2.style.fontSize = '20px'
// h2.style.backgroundColor = 'pink'
// h2.style.color = 'green'


// const React =
// {
//   createElement : function( tagName , text , attributes ){
//     const element = document.createElement(tagName)
//     element.textContent = text
//     for(const key in attributes){
//       element[key] = attributes[key]
//     }
//     return element
//     console.log(element)
//   }
// }

const h2 = React.createElement('h2' , {className:"element" , id:"second" } , 'strike is launched')
console.log(h2)

const h3 = React.createElement('h3' ,{className:"element" , id:"third"}, 'gavin is here' )
console.log(h3)




const rootEl = document.getElementById('root')

const root = ReactDOM.createRoot(rootEl)

root.render(
  React.createElement(React.Fragment , null , h2 , h3)
)
// root.append(h1)
// root.append(h2)
// root.append(h3)

