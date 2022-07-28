import React, { useContext } from 'react';
import CartContext from '../../Context/cartContext';
import CartItem from '../CartItem/CartItem';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom'
import './Cart.css';

const Cart = () => {


    const { cart, totalproducts, totalPrice, clearAll } = useContext(CartContext) // TODO complete this

    return (
        <>
            {cart.length === 0
                ? (<div className='cart-empty'>
                    <Typography variant="h3" color="text.primary">
                        El carrito esta vacio!
                    </Typography>
                    <Button component={Link} to='/' variant="contained">
                        Volver
                    </Button>
                </div>)
                : (
                    <>
                        <Typography variant="h4" color="text.primary">
                            Total = ${totalPrice}
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
                )
            }
        </>
    );
}

export default Cart;