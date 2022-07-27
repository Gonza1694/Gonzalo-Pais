import React from 'react'
import './ItemListContainer.css'
import ItemList from './ItemList/ItemList';
import products from '../../products'


const ItemListContainer = () => {
  return (
    <>
      <ItemList products={products} />
    </>
  )
}

export default ItemListContainer