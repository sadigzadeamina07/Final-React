import { useState } from 'react'
import './App.css'
import Header from './Component/Header'
import AppRouter from './Router/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <AppRouter/>
    </>
  )
}

export default App
