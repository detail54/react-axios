import { AxiosResponse } from 'axios'
import { IProduct } from '../atom/interface'
import { defaultInstance } from '../apis/index'

export const getAllProducts: () => Promise<IProduct[]> = async () => {
  const products: IProduct[] = await defaultInstance
    .get('products')
    .then((response: AxiosResponse) => {
      return response.data
    })

  return products
}
