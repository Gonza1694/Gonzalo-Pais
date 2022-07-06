import React, { useState } from "react";
import './ItemCount.css'
import { AddShoppingCart } from '@material-ui/icons';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const ItemCount = ({ product }) => {
    const [count, setCount] = useState(0)

    function handleIncrement() {
        count < product.stock
            ? setCount(count + 1)
            : console.log("No puede agregar mas articulos")
    }

    function handleDecrement() {
        count > 0
            ? setCount(count - 1)
            : console.log("Sin stock")
    }

    function onAdd() {

        console.log(`Se agregaron ${count} articulos al carrito`)
    }

    return (
        <>
            <div className="btn btn-container">
                <ButtonGroup size="medium" aria-label="small outlined button group">
                    <Button onClick={handleDecrement} disabled={count === 0 ? true : false}>-</Button>
                    <Button >{count}</Button>
                    <Button onClick={handleIncrement} disabled={count === product.stock ? true : false}>+</Button>
                </ButtonGroup>
            </div>
            <div className="btn">
                <Button onClick={onAdd} variant="outlined" size="large" disabled={count === 0 ? true : false}>
                    <AddShoppingCart />
                </Button>
            </div>
        </>

    )
}

export default ItemCount
