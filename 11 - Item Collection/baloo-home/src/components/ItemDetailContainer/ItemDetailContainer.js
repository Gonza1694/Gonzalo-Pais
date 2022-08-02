import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import products from '../../products';
import Spinner from '../Spinner/Spinner';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true);
    const [itemDetail, setItemDetail] = useState([]);

    const { id } = useParams();

    const product = products.filter((product => product.id === parseInt(id)));

    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(product);
            setLoading(false);
        },
            2000);
    });

    useEffect(() => {
        getItem
            .then((product) => setItemDetail(product))
    }, [id]);

    return (
        <>
            {loading
                ? (<Spinner key={id} />)
                : itemDetail.map((product) => (
                    (<ItemDetail
                        key={product.id}
                        product={product}
                    />)
                ))}
        </>
    )
}

export default ItemDetailContainer;