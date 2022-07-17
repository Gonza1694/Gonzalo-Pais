import React from 'react';
import '../Item/Item.css';
import './ItemDetail.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';
import { CardActions } from '@mui/material';

const ItemDetail = (product) => {
    return (
        <Card className="card-container" style={{boxShadow: "none" }}>
            <CardMedia
                component="img"
                image={product.product.image}
                alt="Baloo Home"
            />
            <div className='card-content'>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className="card-title">
                        {product.product.title}
                    </Typography>
                    <Typography>
                        ${product.product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Stock disponible: {product.product.stock}
                    </Typography>
                <Typography className="description">
                    Descripcion: {product.product.description}
                </Typography>
                </CardContent>
                <CardActions className="btn-group-container">
                    <ItemCount product={product.product} />
                </CardActions>
            </div>
        </Card>
    )
}

export default ItemDetail
