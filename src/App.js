import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Work from './pages/Work'
import OutletPage from './pages/OutletPage'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<OutletPage />}>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<Work />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
