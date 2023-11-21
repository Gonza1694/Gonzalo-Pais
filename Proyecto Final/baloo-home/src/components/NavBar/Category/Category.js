import React from 'react';
import './Category.css'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Link } from 'react-router-dom'

export default function Category() {

    const [category, setcategory] = React.useState('');

    const handleChange = (event) => {
        setcategory(event.target.value);
    };

    return (
        <FormControl sx={{ minWidth: 120, color: '#FFF', borderColor: '#FFF' }} className="select-category">
            <InputLabel id="demo-simple-select-label" sx={{ color: '#FFF' }}>Categoria</InputLabel>
            <Select sx={{ color: '#FFF' }}
                labelId="category-select-label"
                id="category-simple-select"
                value={category}
                label="Category"
                onChange={handleChange}
            >
                <MenuItem value={'Cocina'} component={Link} to={"/category/Cocina"}>Cocina</MenuItem>
                <MenuItem value={'Bano'} component={Link} to={"/category/Bano"}>Baño</MenuItem>
                <MenuItem value={'Habitacion'} component={Link} to={"/category/Habitacion"}>Habitacion</MenuItem>
            </Select>
        </FormControl>
    );
}
