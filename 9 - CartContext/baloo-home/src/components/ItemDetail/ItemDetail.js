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

const ItemDetail = ({ title, price, description, image, stock }) => {

    const { addProduct } = useContext(CartContext)

    function onAddEvent(n) {
        addProduct({ ...title, ...price, ...description, quantity: n });
    }

    return (
        <Card className="card-container" style={{ boxShadow: "none" }}>
            <CardMedia
                component="img"
                image={image}
                alt="Baloo Home"
            />
            <div className='card-content'>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className="card-title">
                        {title}
                    </Typography>
                    <Typography>
                        ${price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Stock disponible: {stock}
                    </Typography>
                    <Typography className="description">
                        Descripcion: {description}
                    </Typography>
                </CardContent>
                <CardActions className="btn-group-container">
                    <ItemCount
                        onAdd={(n) => onAddEvent()}
                        stock={stock}
                    />
                </CardActions>
            </div>
        </Card>
    )
}

export default ItemDetail