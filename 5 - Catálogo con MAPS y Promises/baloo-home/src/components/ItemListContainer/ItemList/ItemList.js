import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'

const ItemList = ({ products }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(setLoading, 2000, false);
    }, []);

    return (
        <>
            {loading
                ? ( <CircularProgress disableShrink />) //TODO: create a modal for this spinner
                : (products.map((product) => (
                        <Item key={product.id} product={product} />
                  )))
            }
        </>
    )
}

export default ItemList