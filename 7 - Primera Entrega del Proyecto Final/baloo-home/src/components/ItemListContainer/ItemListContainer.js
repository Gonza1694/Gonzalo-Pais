import React from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import products from '../../products'


const ItemListContainer = () => {
  return (
    <div className='container' >
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer