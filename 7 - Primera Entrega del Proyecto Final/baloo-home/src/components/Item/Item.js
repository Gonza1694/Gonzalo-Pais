import React from 'react'
import './Item.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount'
import { CardActionArea, CardActions } from '@mui/material';
import {Link} from 'react-router-dom';

const Item = ({ product }) => {
    return (
        <Card className="item-card-container">
            <CardActionArea component={Link} to="/Item-Detail">
                <CardMedia
                    component="img"
                    image={product.image}
                    alt="Baloo Home"
                />
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
                </CardContent>
            </CardActionArea>
            <CardActions className="btn-group-container">
                {/*  TODO: fix position */}
                <ItemCount product={product} />
            </CardActions>
        </Card>
    )
}

export default Item
