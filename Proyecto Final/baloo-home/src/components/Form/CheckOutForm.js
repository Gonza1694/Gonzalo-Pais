import React, { useEffect, useState } from 'react';
import { Card, TextField, Button } from '@mui/material';
import './CheckOutForm.css'
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import CheckoutSucceed from '../CheckoutSucceed/CheckoutSucceed';

const CheckOutForm = ({ cart, totalPrice, clearAll }) => {

    const [error, setError] = useState(false);
    const [msg, setMsg] = useState("");
    const [orderId, setOrderId] = useState("");
    const [isSucceed, setIsSucceed] = useState(false)

    const order = () => {
        const date = new Date();
        const dateOrder = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

        const orderInfo = {
            buyer: {
                name: document.getElementById('name').value + document.getElementById('lastName').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('mail').value
            },
            cart,
            totalPrice,
            dateOrder
        }

        const db = getFirestore();
        const collectionOrders = collection(db, "orders")

        addDoc(collectionOrders, orderInfo)
        .then(doc => setOrderId(doc.id))
        .then(setIsSucceed(true))
        .then(clearAll);    
    }

    useEffect(() => {
        validateMail();
    }, [error, msg])

    const validateMail = () => {
        var mail = document.getElementById('mail').value;
        var _ValidateMail = document.getElementById('validateMail').value;

        if (mail !== _ValidateMail) {
            setError(true);
            setMsg("Los campos de Email no coinciden");
        }
        else {
            setError(false);
            setMsg("");
        }
    }

    const close = () => {
        reset();
        document.getElementById('form').style.display = "none";
    }

    const reset = () => {
        document.getElementById('name').value = "";
        document.getElementById('lastName').value = "";
        document.getElementById('phone').value = "";
        document.getElementById('mail').value = "";
        document.getElementById('validateMail').value = "";
    }

    return (
        <>
            <div className='form-container' id='form'>
                <Card>
                    {!isSucceed
                        ? (
                            <>
                                <div className='btn-close-container'>
                                    <Button className='btn-close' variant='contained' color='error' onClick={close}>X</Button>
                                </div>
                                <div className='text-container'>
                                    <TextField className='text' id='name' label="Nombre" variant="standard" required />
                                    <TextField className='text' id='lastName' label="Apellido" variant="standard" required />
                                    <TextField className='text' id='phone' label="Telefono" variant="standard" required />
                                    <TextField className='text' id="mail" label="Email" variant="standard" onChange={validateMail} required />
                                    <TextField
                                        id='validateMail'
                                        error={error}
                                        label="Email"
                                        helperText={msg}
                                        variant="standard"
                                        onChange={validateMail}
                                        required />
                                    <Button className='btn-confirm' variant='contained' color='success' onClick={order}>
                                        Confirmar compra
                                    </Button>
                                </div>
                            </>
                        )
                        : (<CheckoutSucceed
                            orderId={orderId} />)
                    }
                </Card>
            </div>
        </>
    )
}

export default CheckOutForm