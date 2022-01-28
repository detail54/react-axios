import { atom } from 'recoil'
import { IUser, initUser, IProduct } from './interface'

export const authUserState = atom<IUser>({
  key: 'user',
  default: initUser,
})

export const productsListState = atom<IProduct[]>({
  key: 'products',
  default: [],
})
