import { useState } from 'react'
import NavBar from './NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './Body'
function App() {
  return (
    <>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Body/>}>
            <Route path='/login' element={<div>Login PAGE</div>}></Route>
            <Route path='/test' element={<div>TEST PAGE</div>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App