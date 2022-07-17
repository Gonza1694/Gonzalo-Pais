import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import products from '../../products'
import Spinner from '../Spinner/Spinner'

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getItem();
    }, []);

    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
                setLoading(false)
            },
                2000);

        });
    }

    return (
        <>
            {loading
                ? (<Spinner />) //TODO: create a modal for this spinner
                : (<ItemDetail product={products[0]} />)
            }
        </>

    )
}

export default ItemDetailContainer