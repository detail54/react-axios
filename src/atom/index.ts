import { atom } from 'recoil'
import { IUser, initUser } from './interface'

export const userState = atom<IUser>({
  key: 'user',
  default: initUser,
})
