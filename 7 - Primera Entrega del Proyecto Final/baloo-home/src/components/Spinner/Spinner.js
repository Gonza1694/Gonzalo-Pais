import React from 'react'
import './Spinner.css'
import { CircularProgress } from '@mui/material';

const Spinner = () => {
    return (
        <div className='spinner-container'>
            <CircularProgress disableShrink size={'6rem'}/>
        </div>
    )
}

export default Spinner