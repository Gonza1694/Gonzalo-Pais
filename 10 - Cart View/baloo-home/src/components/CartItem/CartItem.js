import React, { useContext } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material';
import CartContext from '../../Context/cartContext'
import './CartItem.css';

const CartItem = ({ product }) => {
    const { deleteProduct } = useContext(CartContext)

    const deleteOne = () => {
        deleteProduct(product.id);
    }
    return (
        <>
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
                        <Typography>
                            Cantidad: {product.quantity}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={deleteOne}>Eliminar del carrito</Button>
                    </CardActions>
                </div>
            </Card>
        </>

    );
}

export default CartItem;