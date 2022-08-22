import React from 'react'
import { Card, Typography, Button } from '@mui/material'
import './CheckoutSucceed.css'

const CheckoutSucceed = ({ orderId }) => {

    const close = () => {
        document.getElementById('form').style.display = "none";
    }

    return (
        <>
            <Card className='succeed-modal'>
                <div className='title-container'>
                    <Typography variant='h4' color="green">
                        Compra exitosa!
                    </Typography>
                    <div className='btn-close-modal'>
                        <Button className='btn-close' variant='contained' color='error' onClick={close}>X</Button>
                    </div>
                </div>
                <div className='modal-body'>
                    <Typography variant='h5'>
                        codigo de compra: {orderId}
                    </Typography>
                </div>
            </Card>
        </>
    )
}

export default CheckoutSucceed