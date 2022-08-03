import React, { useContext } from 'react'
import { ShoppingCartRounded } from '@mui/icons-material';
import CartContext from '../../../Context/cartContext'


const CartWidget = () => {

  const { totalproducts } = useContext(CartContext)

  return (
    <>
      <ShoppingCartRounded />
      {totalproducts}
    </>
  )
}

export default CartWidget