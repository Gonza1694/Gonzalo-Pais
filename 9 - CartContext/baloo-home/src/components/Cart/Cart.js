import React, { useContext } from 'react';
import CartContext from '../../Context/cartContext';

const Cart = () => {

    const { cart, totalItems, totalPrice, clearAll } = useContext(CartContext)

    return (
        <>
        {cart.map(product=> (
        <div>
            <h1>{product.title}</h1>
            <img src={product.image}></img>
            <h2>${product.price}</h2>
        </div>))}
        </>
    )
}

export default Cart