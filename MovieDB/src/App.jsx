import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <Text read= "Hello World"/>
       <Text read= "Hello Dev"/> 

    </>
  )
}


function Text({read}) {
  return(
    <>
    <h1>{read}</h1>
    </>
  )
}

export default App
