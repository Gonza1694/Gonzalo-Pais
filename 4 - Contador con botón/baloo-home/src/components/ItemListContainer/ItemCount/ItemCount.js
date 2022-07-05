import React, { useState } from "react";
import './ItemCount.css'
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const ItemCount = () => {
    const [count, setCount] = useState(0)

    return (
        <div className="btn-count">
            <ButtonGroup size="large" aria-label="small outlined button group">
                <Button onClick={() => setCount(count + 1)}>+</Button>
                <Button >{count}</Button>
                <Button onClick={() => setCount(count - 1)}>-</Button>
            </ButtonGroup>
        </div>
    )
}

export default ItemCount
