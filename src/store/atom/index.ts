import { atom } from 'recoil'
import { IUser, initUser } from './interface'

export const allUserState = atom<IUser[]>({
  key: 'users',
  default: [],
})

export const authUserState = atom<IUser>({
  key: 'user',
  default: initUser,
})
