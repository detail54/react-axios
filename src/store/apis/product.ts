/* eslint-disable @typescript-eslint/no-explicit-any */

// lib
import { AxiosResponse } from 'axios'
// api
import { defaultInstance } from './index'

// product List
export const getProductList: () => Promise<AxiosResponse<any, any>> =
  async () => {
    const data: AxiosResponse = await defaultInstance.get('products')

    return data
  }
