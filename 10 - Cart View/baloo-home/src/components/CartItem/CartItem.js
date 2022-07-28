import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material';
import './CartItem.css';

const CartItem = ({ product, clearAll }) => {
    return (
        <Card sx={{ maxWidth: '100%' }} className='Card'>
            <div className='card-content'>
                <CardMedia
                    component="img"
                    height="150"
                    width="80"
                    image={product.image}
                    alt=""
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Eliminar del carrito</Button>
                </CardActions>
            </div>
        </Card>
    );
}

export default CartItem;