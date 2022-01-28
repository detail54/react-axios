import React, { useEffect } from 'react'
// lib
import { AxiosResponse } from 'axios'
import { useRecoilState } from 'recoil'
// api
import { getProductList } from '../../store/apis/product'
// atom
import { productsListState } from '../../store/atom'
// interface
import { IProduct } from '../../store/atom/interface'
// component
import ProductListItem from './ProductListItem'
// style
import { ProductStyles } from './Product.styles'

const Product: React.FC = () => {
  const [productList, setProductList] = useRecoilState(productsListState)

  useEffect(() => {
    if (productList.length === 0) {
      getProductList().then((response: AxiosResponse) => {
        setProductList(response.data)
      })
    }
  }, [productList])

  const products = productList.map((product: IProduct) => (
    <ProductListItem key={product.id} {...product} />
  ))

  return <ProductStyles.Products>{products}</ProductStyles.Products>
}

export default Product
