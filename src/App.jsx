import React from 'react'
import card from "./components/card.jsx"
import Navbar from './components/navbar.jsx'
const App = () => {

  return (
    <div>
      <Navbar /> 
      {card()} 
      {card()}
      <Navbar />
    </div>
  )
}

export default App


 