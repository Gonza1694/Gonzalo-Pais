import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../../firebase.js';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';
import './ItemListContainer.css';


const ItemListContainer = () => {

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();
  useEffect(() => {

    setLoading(true)

    !categoryId
      ? (getProducts().then((snapshot) => {
        setProducts(
          snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        );
        setLoading(false)
      }))

      : (getProductsByCategory(categoryId)).then((snapshot) => {
        setProducts(
          snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        );
        setLoading(false)
      });
  }, [categoryId])

  return (
    loading
      ? (<Spinner />)
      : (<div className='container' >
        <ItemList
          products={products}
        />
      </div>)
  )
}

export default ItemListContainer;