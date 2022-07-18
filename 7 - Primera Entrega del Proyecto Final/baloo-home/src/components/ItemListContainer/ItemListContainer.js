import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import products from '../../products'


const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItems();
  });

  const getItems = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
        setLoading(false)
      },
        2000);

    });
  }

  return (
    <div className='container' >
      <ItemList
        products={products}
        loading={loading}
      />
    </div>
  )
}

export default ItemListContainer