import { AxiosError } from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from 'recoil'
import { userLogin, authUser } from '../../recoil/selector/user'
import { LoginStyles } from './Login.styles'
import { allUserState, authUserState } from '../../recoil/atom'
import { IUser } from '../../recoil/atom/interface'

const Login: React.FC = () => {
  const [userID, setUserID] = useState<string>('')
  const [userPW, setUserPW] = useState<string>('')

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.type === 'password') {
      setUserPW(event.currentTarget.value)
    } else {
      setUserID(event.currentTarget.value)
    }
  }

  const onSubmit = () => {
    console.log('ㅎㅇㅎㅇ')
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
