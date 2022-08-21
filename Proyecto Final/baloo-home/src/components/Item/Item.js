import React from 'react';
import './Item.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (
        <Card className="item-card-container">
            <CardActionArea component={Link} to={`/Item-Detail/${product.id}`}>
                <CardMedia
                    component="img"
                    image={product.imageId}
                    alt="Baloo Home"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className="card-title">
                        {product.title}
                    </Typography>
                    <Typography variant="h6">
                        ${product.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Item;