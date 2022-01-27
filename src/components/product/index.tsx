import React from 'react'
import { useRecoilValue } from 'recoil'
import { userState } from '../../atom'

const Product: React.FC = () => {
  const user = useRecoilValue(userState)

  console.log(user)

  return <div>dddd</div>
}

export default Product
