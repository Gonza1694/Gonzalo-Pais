import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import products from '../../products'
import Spinner from '../Spinner/Spinner'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true);
    const [itemDetail, setItemDetail] = useState([]);

    const { id } = useParams()

    const product = products.filter((product => product.id == id))

    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(product)
            setLoading(false)
        },
            2000);
    });

    useEffect(() => {
        getItem
            .then((product) => setItemDetail(product))
    }, [id]);

    const mapItemDetail = itemDetail.map(({ id, title, price, description, category, image, stock }) => (
        <ItemDetail
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            stock={stock}
        />
    ))

    return (
        <>
            {loading
                ? (<Spinner />) //TODO: create a modal for this spinner
                : (mapItemDetail)
            }
        </>

    )
}

export default ItemDetailContainer