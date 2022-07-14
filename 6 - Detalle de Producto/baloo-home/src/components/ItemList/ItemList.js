import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'

const ItemList = ({ products }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        prom();
        console.log('useEffect')
    }, []);

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
        <Item key={product.id} product={product} />
    ))

    return (
        <>
            {loading
                ? (<CircularProgress disableShrink />) //TODO: create a modal for this spinner
                : (mapProducts)
            }
        </>
    )
}

export default ItemList