import React, { useContext } from 'react';
import '../Item/Item.css';
import './ItemDetail.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../Context/cartContext';
import { CardActions } from '@mui/material';

const ItemDetail = ({product}) => {

    const { addProduct } = useContext(CartContext)

    function onAddEvent(n) {
        addProduct({...product, quantity: n });
    }

    return (
        <Card className="card-container" style={{ boxShadow: "none" }}>
            <CardMedia
                component="img"
                image={product.image}
                alt="Baloo Home"
            />
            <div className='card-content'>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className="card-title">
                        {product.title}
                    </Typography>
                    <Typography>
                        ${product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Stock disponible: {product.stock}
                    </Typography>
                    <Typography className="description">
                        Descripcion: {product.description}
                    </Typography>
                </CardContent>
                <CardActions className="btn-group-container">
                    <ItemCount
                        onAdd={(n) => onAddEvent(n)}
                        stock={product.stock}
                    />
                </CardActions>
            </div>
        </Card>
    );
}

export default ItemDetail