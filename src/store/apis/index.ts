import axios, { AxiosRequestConfig } from 'axios'

export const SERVER_URL = 'https://fakestoreapi.com'
export const API_URL = {
  USER_LIST: `${SERVER_URL}/users`,
}

const defaultApi = (url: string, options?: AxiosRequestConfig) => {
  const instance = axios.create({
    baseURL: url,
    ...options,
  })

  return instance
}

const authApi = (url: string, options?: AxiosRequestConfig) => {
  const token = 'token'
  const instance = axios.create({
    baseURL: url,
    headers: { 'X-Requested-With': token },
    ...options,
  })

  return instance
}

export const defaultInstance = defaultApi(SERVER_URL)
export const authInstance = authApi(SERVER_URL)
