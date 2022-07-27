import React, { useState } from "react";
import './ItemCount.css'
import { AddShoppingCart, ShoppingCartCheckout } from '@mui/icons-material';
import { Button, ButtonGroup, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ItemCount = ({ stock }) => {

    const [count, setCount] = useState(0);
    const [showCart, setshowCart] = useState(true);

    function handleIncrement() {
        count < stock
            ? setCount(count + 1)
            : console.log("No puede agregar mas articulos");//TODO: add modal message
    }

    function handleDecrement() {
        count > 0
            ? setCount(count - 1)
            : console.log("Sin stock"); //TODO: add modal message
    }

    function onAdd() {
        setshowCart(false);
        alert(`Se agregaron ${count} articulos al carrito`); // TODO: add modal message
    }

    return (
        <>
            {showCart
                ? (
                    <>
                        <div className="btn">
                            <ButtonGroup size="medium" aria-label="small outlined button group">
                                <Button onClick={handleDecrement} disabled={count === 0 ? true : false}>-</Button>
                                <Button>{count}</Button>
                                <Button onClick={handleIncrement} disabled={count === stock ? true : false}>+</Button>
                            </ButtonGroup>
                        </div>
                        <div className="btn">
                            <Button onClick={onAdd} variant="outlined" size="large" disabled={count === 0 ? true : false}>
                                <AddShoppingCart />
                            </Button>
                        </div>
                    </>
                )
                : (<>
                    <div className="btn btn-go-to-cart">
                        <Button component={Link} to="/cart" variant="outlined" size="large">
                            <Typography>Ir al carrito </Typography>
                            <ShoppingCartCheckout className="ShoppingCartCheckout"/>
                        </Button>
                    </div>
                </>)
            }
        </>
    )
}

export default ItemCount
