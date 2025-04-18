import React from 'react'
import MainPage from './pages/MainPage'
import BlogPage from './pages/BlogPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import Navi from './component/Navi'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlogPageDetail from './pages/detailPage/BlogPageDetail'
import LoadingPage from './pages/LoadingPage'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<LoadingPage />} />

        <Route path='ank18' element={<Navi />}>
          <Route path='/ank18' element={<MainPage />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='blog/:blogID' element={< BlogPageDetail />} />
          <Route path='gallery' element={<GalleryPage />} />
          <Route path='contact' element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App