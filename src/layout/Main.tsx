import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Home from '../components/home/Home'
import Login from '../components/login/Login'
import Product from '../components/product'

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Main: React.FC = () => {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='product' element={<Product />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default Main
