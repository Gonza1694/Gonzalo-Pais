import React from 'react';
import './Category.css'
import Label from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { MenuItem, Select } from '@mui/material';
import { Link, useParams } from 'react-router-dom'

export default function Category() {

    const { categoryId } = useParams()

    return (
        <FormControl sx={{ minWidth: 120, color: '#FFF' }} variant="standard" className="select-category">
            <Label id="demo-customized-select-label" sx={{ color: "#FFF" }}>Categoria</Label>
            <Select
                defaultValue={''}>
                <MenuItem value={'Cocina'} component={Link} to={`/category/${categoryId}`}>Cocina</MenuItem>
                <MenuItem value={'Bano'} component={Link} to={`/category/${categoryId}`}>Baño</MenuItem>
                <MenuItem value={'Habitacion'} component={Link} to={`/category/${categoryId}`}>Habitacion</MenuItem>
            </Select>
        </FormControl>
    );
}
