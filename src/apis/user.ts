/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { AxiosError, AxiosResponse } from 'axios'
import { IUser } from '../atom/interface'
import { authInstance, defaultInstance } from './index'
import { LoginForm } from './interface'

// find user data
// fake api에 token이 일부분만 나와서 데이터 decode불가.
// 여기에선 전체 유저리스트중 username, password 일치하는 데이터 검색하여 리턴함.
export const findUser: (userData: LoginForm) => Promise<IUser | undefined> =
  async (userData) => {
    let findUserData: IUser | undefined
    await defaultInstance
      .get('users')
      .then((response: AxiosResponse<any, any>) => {
        findUserData = response.data.find(
          (user: IUser) =>
            user.username === userData.username &&
            user.password === userData.password,
        )
      })
      .catch((error: AxiosError) => {
        console.log('get all users error:: ', error)
      })

    return findUserData
  }

// login
export const userLogin: (
  formData: LoginForm,
) => Promise<AxiosResponse<any, any>> = async (formData) => {
  const data = await defaultInstance.post('auth/login', formData)

  return data
}
