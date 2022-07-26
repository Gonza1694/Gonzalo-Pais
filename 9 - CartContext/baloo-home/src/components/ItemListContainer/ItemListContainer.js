import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import products from '../../products'
import Spinner from '../Spinner/Spinner'
import './ItemListContainer.css'


const ItemListContainer = () => {

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(products);

  const { categoryId } = useParams();

  const getItems =
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
        setLoading(false)
      },
        2000);
    });

  useEffect(() => {

    setLoading(true)

    !categoryId
      ? (getItems
        .then(setProduct(products)))

      : (getItems
        .then(() => {
          const producstByCategory = products.filter((products => products.category === categoryId));
          setProduct(producstByCategory);
        }))
  }, [categoryId])

  return (
    loading
      ? (<Spinner />)
      : (<div className='container' >
        <ItemList
          products={product}
        />
      </div>)
  )
}

export default ItemListContainer