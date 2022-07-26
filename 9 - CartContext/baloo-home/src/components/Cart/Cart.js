import React, { useContext } from 'react';
import CartContext from '../../Context/cartContext';

const Cart = () => {

    const { cart, totalItems, totalPricec, clearAll } = useContext(CartContext)

    return (
        <>
        <div>{cart.map(product=> (<div>{product.id}</div>))}</div>
        </>
    )
}

export default Cart