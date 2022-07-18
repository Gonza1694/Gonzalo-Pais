import React from 'react'
import Item from '../Item/Item'
import Spinner from '../Spinner/Spinner'


const ItemList = ({ products, loading }) => {

    const mapProducts = () => {

        products = products.map((product) => (
            loading
                ? (<Spinner key={product.id} />)
                : (<Item key={product.id} product={product} />)
        ))
        return products
    }

    return (
        <>
            {mapProducts()}
        </>
    )
}

export default ItemList