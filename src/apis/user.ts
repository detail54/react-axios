import { AxiosResponse } from 'axios'
import { authInstance, defaultInstance } from './index'
import { LoginForm } from './interface'

// login
export const userLogin = async (formData: LoginForm) => {
  try {
    await defaultInstance
      .post('auth/login', formData)
      .then((response: AxiosResponse<any, any>) => {
        console.log('response:::', response)
      })
  } catch (error) {
    console.log('error:: ', error)
  }
}
