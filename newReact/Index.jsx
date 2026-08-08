import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactIcon from './Icon.svg?react'


export default function Index(){

  return (
    <>
      <h1>Hello there</h1>
      <ReactIcon />
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Index />)