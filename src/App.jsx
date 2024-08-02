import React, { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SingleProduct from './pages/SingleProduct'
import NotFound from './pages/NotFound'

const App = () => {
  const [count, setCount] = useState(0)
  function increment() {
    setCount(count + 1)
  }
  function decrement(){
    setCount(count >0 ? count -1 : 0)
  }
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/single-product' element={<SingleProduct count={count} increment={increment} decrement={decrement}/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App