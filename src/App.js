import React from 'react'
import { Header } from './component'
import { Route, Routes } from 'react-router-dom'
import { Home } from './page'


function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App