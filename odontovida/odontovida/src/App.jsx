import { useState } from 'react'
import Teste from './components/teste'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Teste />  
    </>
  )
}

export default App
