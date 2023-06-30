import React from 'react'
import { Header, Footer} from './component'
import { Route, Routes } from 'react-router-dom'
import { Home, Rent } from './page'



function App() {  
  return (
    <div className='App'>
      <Header />
      <main>
        <Routes>
          <Route path="/bike" element={<Home/>}></Route>
          <Route path="/bike/rent" element={<Rent/>}></Route>
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App