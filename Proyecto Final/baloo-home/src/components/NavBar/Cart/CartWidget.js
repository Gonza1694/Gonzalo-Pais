import React, { useContext } from 'react'
import { ShoppingCartRounded } from '@mui/icons-material';
import CartContext from '../../../Context/cartContext'
import { Typography } from '@mui/material';


const CartWidget = () => {

  const { totalproducts } = useContext(CartContext)

  return (
    <>
      <ShoppingCartRounded sx={{ color: 'white' }} />
      <Typography sx={{ color: 'white' }}>
        {totalproducts}
      </Typography>
    </>
  )
}

export default CartWidget