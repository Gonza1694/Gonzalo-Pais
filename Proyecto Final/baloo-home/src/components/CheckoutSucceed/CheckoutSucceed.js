import React from 'react'
import { Card, Typography, Button } from '@mui/material'
import './CheckoutSucceed.css'

const CheckoutSucceed = ({ orderId }) => {

    const close = () => {
        document.getElementById('form').style.display = "none";
    }

    return (
        <div className='succeed-modal'>
            <Card>
                <div className='title-container'>
                    <Typography variant='h4' color="green">
                        Compra exitosa!
                    </Typography>
                    <div className='btn-close-modal'>
                        <Button className='btn-close' variant='contained' color='error' onClick={close}>X</Button>
                    </div>
                </div>
                <Typography variant='h5'>
                    codigo de compra: {orderId}
                </Typography>
            </Card>
        </div>
    )
}

export default CheckoutSucceed