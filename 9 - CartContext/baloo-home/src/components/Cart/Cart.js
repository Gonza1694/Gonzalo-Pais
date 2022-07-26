import React, { useContext } from 'react';
import CartContext from '../../Context/cartContext';

const Cart = () => {

    const { cart, totalItems, totalPricec, clearAll } = useContext(CartContext)

    return (
        <>
        <div>CART</div>
        </>
    )
}

export default Cart