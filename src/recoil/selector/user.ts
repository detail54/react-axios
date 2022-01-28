/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { RecoilState, RecoilValueReadOnly, selectorFamily } from 'recoil'
import { AxiosError, AxiosResponse } from 'axios'
import { defaultInstance } from './index'
import { LoginForm } from './interface'
import { IUser } from '../atom/interface'
import { authUserState } from '../atom'

// selectorFamily의 param type 을 맞추기위해 속성 설정. LoginForm이 interface여서..
// LoginForm이 type 이라면 아래 설정 필요없이 바로 적용가능
interface Param extends LoginForm {
  [key: string]: string
}

// login
export const userLogin: (
  param: Param,
) => RecoilValueReadOnly<AxiosResponse<any, any>> = selectorFamily<
  AxiosResponse,
  Param
>({
  key: 'login',
  get:
    (param: LoginForm) =>
    async ({ get }) => {
      const data = await defaultInstance.post('auth/login', param)

      return data
    },
  set: (param: LoginForm) => async () => {
    const data = param && (await defaultInstance.post('auth/login', param))
  },
})

// 로그인 유저 데이터 atom에 저장.
export const authUser: (param: Param) => RecoilState<IUser> = selectorFamily<
  IUser,
  Param
>({
  key: 'user',
  get:
    () =>
    async ({ get }) => {
      return get(authUserState)
    },
  set:
    (param: LoginForm) =>
    async ({ set }) => {
      // 로그인시 fake api에서 token이 일부분만 제공되어 데이터 decoding불가.
      // 그래서 전체 유저리스트중 username, password 일치하는 데이터 검색하여 atom에 저장.
      const data = await defaultInstance
        .get('users')
        .then((response: AxiosResponse) =>
          response.data.find(
            (user: IUser) =>
              user.username === param.username &&
              user.password === param.password,
          ),
        )
        .catch((error: AxiosError) => {
          console.log('get all users error:: ', error)
        })
      set(authUserState, data)
    },
})
