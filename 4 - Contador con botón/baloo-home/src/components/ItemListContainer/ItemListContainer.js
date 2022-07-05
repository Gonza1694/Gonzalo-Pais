import React from 'react'
import ItemCount from './ItemCount/ItemCount'
import myImg from '../../img/logo.png'
import './ItemListContainer.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const ItemListContainer = () => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={myImg}
            alt="Baloo Home"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Baloo Home
            </Typography>
            <Typography variant="body2" color="text.secondary">

            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className='btn-group-container'>
          <ItemCount />
        </CardActions>
      </Card>
    </>
  )
}

export default ItemListContainer