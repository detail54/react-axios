import React from 'react'
// interface
import { IProduct } from '../../store/atom/interface'
// style
import { ProductListItemStyles } from './ProductListItem.styles'

const ProductListItem: React.FC<IProduct> = (props) => {
  const { title, price, category, description, image } = props

  return (
    <ProductListItemStyles.Product>
      <ProductListItemStyles.ProductInfo>
        <ProductListItemStyles.Label>카테고리 : </ProductListItemStyles.Label>
        <ProductListItemStyles.Category>
          {category}
        </ProductListItemStyles.Category>
      </ProductListItemStyles.ProductInfo>
      <ProductListItemStyles.ProductInfo>
        <ProductListItemStyles.Label>상품명 : </ProductListItemStyles.Label>
        <ProductListItemStyles.Title>{title}</ProductListItemStyles.Title>
      </ProductListItemStyles.ProductInfo>
      <ProductListItemStyles.ProductInfo>
        <ProductListItemStyles.Label>가격 : </ProductListItemStyles.Label>
        <ProductListItemStyles.Price>{`$ ${price}`}</ProductListItemStyles.Price>
      </ProductListItemStyles.ProductInfo>
      <ProductListItemStyles.ProductInfo>
        <ProductListItemStyles.Label>상품 설명 : </ProductListItemStyles.Label>
        <ProductListItemStyles.Description>
          {description}
        </ProductListItemStyles.Description>
      </ProductListItemStyles.ProductInfo>
      <ProductListItemStyles.ProductInfo>
        <ProductListItemStyles.Label>이미지 : </ProductListItemStyles.Label>
        <ProductListItemStyles.Image src={image} />
      </ProductListItemStyles.ProductInfo>
    </ProductListItemStyles.Product>
  )
}

export default ProductListItem
