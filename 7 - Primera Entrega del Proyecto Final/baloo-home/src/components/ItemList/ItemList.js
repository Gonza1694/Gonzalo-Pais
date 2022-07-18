import React from 'react'
import Item from '../Item/Item'


const ItemList = ({ products }) => {

    const mapProducts = () => {

        return products.map((product) => (
            (<Item key={product.id} product={product} />)
        ))
    }

    return (
        <>
            {mapProducts()}
        </>
    )
}

export default ItemList