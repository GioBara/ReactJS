import { useState } from 'react'
import './App.css'
import './styles/index.scss'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContextProvider } from './context/CartContext'
import CartView from './components/CartView/CartView'

function App() {
  
  return (
    <CartContextProvider> 

      <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path="/Productos" element={ <ItemListContainer/> }/>
        <Route path="/Productos/:categoryId" element={ <ItemListContainer/> }/>
        <Route path='/item/:itemId' element={ <ItemDetailContainer/>} />
        <Route path='/AcercaDeNosotros' element={<h2>Acerca de Nosotros</h2>}/>
        <Route path="/Contacto" element={ <h2>Contacto</h2> }/>
        <Route path='/Cart' element={ <CartView />}></Route>

        <Route path='/not-found' element={ <h2>Not Found</h2> }/>
        <Route path='/*' element={ <Navigate to={"/not-found"}/>} />
      </Routes>


  </BrowserRouter>

  </CartContextProvider>
   
  )
}

export default App
