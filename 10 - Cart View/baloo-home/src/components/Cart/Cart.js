import React, { useContext } from 'react';
import CartContext from '../../Context/cartContext';
import CartItem from '../CartItem/CartItem';
import { Typography } from '@mui/material';
import './Cart.css';

const Cart = () => {

    const { cart, totalproducts, totalPrice, clearAll } = useContext(CartContext) // TODO complete this

    return (
        <>
            <Typography variant="h4" color="text.primary">
                {totalproducts} Articulos | Total = {totalPrice}
            </Typography>

            <div className='cart-item-container'>
                {cart.map(product => (
                    <CartItem product={product}
                        totalproducts={totalproducts}
                        totalPrice={totalPrice}
                        clearAll={clearAll}
                    />
                ))}
            </div>
        </>
    );
}

export default Cart;