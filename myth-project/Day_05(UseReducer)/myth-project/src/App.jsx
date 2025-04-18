import React from 'react'
import Navi from './components/Navi'
import Form from './components/Form'
import SearchBar from './components/SearchBar'
import CardList from './components/CardList'
import './assets/styles/index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'



const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App