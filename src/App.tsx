// import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './styles/App.css'
import Layout from './components/layout/Layout'
import Course from './pages/Course'

const App = () => {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/course/:productID" element={<Course />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  )
}

export default App