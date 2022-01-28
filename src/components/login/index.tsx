import React, { useState } from 'react'
// lib
import { AxiosError, AxiosResponse } from 'axios'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
// api
import { userLogin, allUsers } from '../../store/apis/user'
// style
import { LoginStyles } from './Login.styles'
// interface
import { initUser, IUser } from '../../store/atom/interface'
// atom
import { authUserState } from '../../store/atom'

const Login: React.FC = () => {
  const [userID, setUserID] = useState<string>('')
  const [userPW, setUserPW] = useState<string>('')
  const setAuthUserData = useSetRecoilState(authUserState)

  const navigate: NavigateFunction = useNavigate()

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
        let userData: IUser = initUser
        allUsers().then((response: AxiosResponse) => {
          userData = response.data.find(
            (user: IUser) =>
              user.username === userID && user.password === userPW,
          )
        })

        setAuthUserData(userData)
        navigate('/product')
      })
      .catch((error: AxiosError) => {
        // eslint-disable-next-line no-console
        console.log('login error::: ', error)
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
