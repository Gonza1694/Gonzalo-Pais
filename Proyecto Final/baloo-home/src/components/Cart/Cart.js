import React, { useContext, useState } from 'react';
import CartContext from '../../Context/cartContext';
import CartItem from '../CartItem/CartItem';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom'
import './Cart.css';

const Cart = () => {

    const { cart, totalproducts, totalPrice, clearAll } = useContext(CartContext);

    const [orderId, setOrderId] = useState("");

    const order = () => {
        const date = new Date();
        const dateOrder = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

        const orderInfo = {
            buyer: {
                name: "Gonzalo",
                phone: "+543816010203",
                email: "gonzalo@mail.com"
            },
            cart,
            totalPrice,
            dateOrder
        }

        const db = getFirestore();
        const collectionOrders = collection(db, "orders")

        addDoc(collectionOrders, orderInfo).then(doc => setOrderId(doc.id));
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
                            <Button size="small" variant="contained" onClick={order}>Comprar</Button>
                            <Button size="small" variant="outlined" color="error" onClick={clearAll}>Vaciar del carrito</Button>
                        </div>
                        <div>
                            <Typography>
                               Codigo de compra:  {orderId}
                            </Typography>
                        </div>
                    </>
                )
            }
        </>
    );
}

export default Cart;