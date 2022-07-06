import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount'
import { CardActionArea, CardActions } from '@mui/material';

const Item = ({ product }) => {
    return (
        <Card className="card-container">
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={product.image}
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
    )
}

export default Item
