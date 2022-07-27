import React from 'react'
import myImg from '../../img/logo.png'
const ItemListContainer = (props) => {
  return (
    <>
    <h1>{props.greeting}</h1>
    <img src={myImg} alt="Baloo-Home logo"/>
    </>
  )
}

export default ItemListContainer