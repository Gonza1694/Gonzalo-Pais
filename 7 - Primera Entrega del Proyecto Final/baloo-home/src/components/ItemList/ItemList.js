import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import Spinner from '../Spinner/Spinner'


const ItemList = ({ products }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        prom();
    });

    const prom = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
                setLoading(false)
            },
                2000);

        });
    }

    const mapProducts = products.map((product) => (
        loading
            ? (<Spinner key={product.id}/>)
            : (<Item key={product.id} product={product} />)
    ))

    return (
        <>
            {mapProducts}
        </>
    )
}

export default ItemList