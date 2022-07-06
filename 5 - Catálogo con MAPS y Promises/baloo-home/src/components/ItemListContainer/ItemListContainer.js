import React from 'react'
import ItemCount from './ItemCount/ItemCount'
import myImg from '../../img/logo.png'
import './ItemListContainer.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

import products from '../../products';


const ItemListContainer = (props) => {
  return (
    <>
      {products.map((product) => (
        <Card className="card-container">
          <CardActionArea>
            <CardMedia
              component="img"
              image={myImg}
              alt="Baloo Home"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography>
                ${product.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Stock disponible: {product.stock}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className='btn-group-container'>
            <ItemCount product={product} />
          </CardActions>
        </Card>
      ))}
    </>
  )
}

export default ItemListContainer