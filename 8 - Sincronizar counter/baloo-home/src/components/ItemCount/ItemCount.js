import React, { useState } from "react";
import './ItemCount.css'
import { AddShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

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
                        </div><div className="btn">
                            <Button onClick={onAdd} variant="outlined" size="large" disabled={count === 0 ? true : false}>
                                <AddShoppingCart />
                            </Button>
                        </div>
                    </>
                )
                : (<Link to="/cart">Ir al carrito</Link>)
            }
        </>
    )
}

export default ItemCount
