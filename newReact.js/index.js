// const reactEl = React.createElement('h1' , {id:"header"} , "Power , Discipline , Dyan , Tapasya")

const reactEl = <h1>Dyan , Tapasya , Self Discipline</h1>

function App(){
  return (
    <h1>yo yo yo{}</h1>
  )
}

const root = document.getElementById('root')

const rootEl = ReactDOM.createRoot(root)

rootEl.render(App())

// const root = document.getElementById('root')
// const header = document.createElement('h1')

// root.textContent = ''

// header.textContent = 'Power , Discipline , Dyan , Tapasya'

// root.append(header)
