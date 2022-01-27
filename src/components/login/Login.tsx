import { AxiosError } from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { userLogin, findUser } from '../../apis/user'
import { LoginStyles } from './Login.styles'
import { userState } from '../../atom'
import { IUser } from '../../atom/interface'

const Login: React.FC = () => {
  const [userID, setUserID] = useState<string>('')
  const [userPW, setUserPW] = useState<string>('')
  const setUser = useSetRecoilState(userState)
  const navigate = useNavigate()

  const getUserData = () => {
    findUser({
      username: userID,
      password: userPW,
    }).then((data: IUser | undefined) => {
      if (data) {
        setUser(data)
      }
    })
    navigate('/product')
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.type === 'password') {
      setUserPW(event.currentTarget.value)
    } else {
      setUserID(event.currentTarget.value)
    }
  }

  const onSubmit = () => {
    userLogin({
      username: userID,
      password: userPW,
    })
      .then(() => {
        getUserData()
      })
      .catch((error: AxiosError) => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  }

  return (
    <LoginStyles.Form>
      <LoginStyles.Header>로그인</LoginStyles.Header>
      <LoginStyles.Label htmlFor='userID'>ID</LoginStyles.Label>
      <LoginStyles.Input
        id='userID'
        type='text'
        value={userID}
        onChange={onChange}
      />
      <LoginStyles.Label htmlFor='userPW'>PW</LoginStyles.Label>
      <LoginStyles.Input
        id='userPW'
        type='password'
        value={userPW}
        onChange={onChange}
      />
      <LoginStyles.Submit onClick={onSubmit}>login</LoginStyles.Submit>
    </LoginStyles.Form>
  )
}

export default Login
