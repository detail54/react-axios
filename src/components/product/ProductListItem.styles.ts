import styled from 'styled-components'

const Product = styled.li`
  border-radius: 5px;
  box-shadow: 5px 5px 13px;
  list-style: none;
  width: 40%;
  padding: 10px 20px;
  margin: 10px 20px;
`

const ProductInfo = styled.div`
  width: 100%;
  padding: 5px;
`

const Label = styled.label`
  font-weight: 600;
  margin-right: 10px;
`

const Title = styled.h3`
  font-weight: 400;
  display: inline-block;
  margin: 0;
`

const Price = styled.span`
  color: red;
  font-weight: 400;
  display: inline-block;
`

const Category = styled.span`
  font-weight: 400;
  color: #7c7c7c;
  display: inline-block;
`

const Description = styled.span`
  font-weight: 400;
  display: inline-block;
  margin: 10px 0;
`

const Image = styled.img`
  width: 50%;
  display: block;
  margin: 10px 0;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`

export const ProductListItemStyles = {
  Product,
  ProductInfo,
  Label,
  Title,
  Price,
  Category,
  Description,
  Image,
}
