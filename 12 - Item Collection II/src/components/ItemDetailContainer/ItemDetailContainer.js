import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductDetail } from '../../firebase'
import Spinner from '../Spinner/Spinner';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true);
    const [itemDetail, setItemDetail] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        getProductDetail(id).then((snapshot) => {
            console.log(snapshot)
            setItemDetail(snapshot.docs.map(document => ({ id: document.id, ...document.data() })))
            setLoading(false);
        })
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