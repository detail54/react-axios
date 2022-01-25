import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Login = styled(Link)`
  text-decoration: none;
  background-color: black;
  color: white;
  font-weight: bold;
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
`

const Home: React.FC = () => {
  return <Login to='/login'>로그인</Login>
}

export default Home
