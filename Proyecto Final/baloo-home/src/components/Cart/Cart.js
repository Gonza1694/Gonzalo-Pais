import React, { useState, useContext } from 'react';
import CartContext from '../../Context/cartContext';
import CartItem from '../CartItem/CartItem';
import CheckOutForm from '../Form/CheckOutForm'
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom'
import './Cart.css';

const Cart = () => {

    const { cart, totalproducts, totalPrice, clearAll } = useContext(CartContext);

    const [display, setDisplay] = useState(false);

    const displayModal = () => {
        !display ? setDisplay(true) : setDisplay(false)
    }

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
                        <div className='button-container'>
                            <Button size="small" variant="contained" onClick={displayModal}>Comprar</Button>
                            <Button size="small" variant="outlined" color="error" onClick={clearAll}>Vaciar del carrito</Button>
                        </div>
                    </>
                )
            }
            {
                display
                    ? <CheckOutForm
                        cart={cart}
                        totalPrice={totalPrice}
                        clearAll={clearAll} />
                    : <></>
            }
        </>
    );
}

export default Cart;