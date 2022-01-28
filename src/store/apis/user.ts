/* eslint-disable @typescript-eslint/no-explicit-any */

// lib
import { AxiosResponse } from 'axios'
// api
import { defaultInstance } from './index'
// interface
import { LoginForm } from './interface'

// login api
export const userLogin: (
  formData: LoginForm,
) => Promise<AxiosResponse<any, any>> = async (formData) => {
  const data: AxiosResponse = await defaultInstance.post('auth/login', formData)

  return data
}

/**
 * find auth user data.
 * 사용중인 fake api에서 token값을 일부분만 제공해줘서 decode 불가능.
 * 전체 유저 데이터를 호출하여 사용되는 곳에서 로그인 성공한 username, password로
 * 비교하여 atom에 저장해야함.
 */
export const allUsers: () => Promise<AxiosResponse<any, any>> = async () => {
  const data: AxiosResponse = await defaultInstance.get('users')

  return data
}
