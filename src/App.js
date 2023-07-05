import React from 'react'
import { Header, Footer} from './component'
import { Route, Routes } from 'react-router-dom'
import { About, Delivery, Home, Rent, ToRide } from './page' 



function App() {  
  return (
    <div className='App'>
      <Header />
      <main>
        <Routes>
          <Route path="/bike" element={<Home/>}></Route>
          <Route path="/bike/rent" element={<Rent/>}></Route>
          <Route path="/bike/about" element={<About/>}></Route>
          <Route path="/bike/delivery" element={<Delivery/>}></Route>
          <Route path="/bike/where-to-ride" element={<ToRide/>}></Route>
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App