import { useState } from 'react'
import './App.css'
import Header from './Component/Header'
import AppRouter from './Router/AppRouter'
import Footer from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <AppRouter/>
    <Footer />
    </>
  )
}

export default App
