import { useState } from 'react'
import './App.css'
import './styles/index.scss'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer />
    </>
  )
}

export default App
