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
        <FormControl sx={{ minWidth: 120, color: '#FFF' }} className="select-category">
            <InputLabel id="category-select-label" sx={{ color: "#FFF" }}>Categoria</InputLabel>
            <Select
                labelId="category-select-label"
                id="category-select-autowidth"
                value={category}
                onChange={handleChange}
                autoWidth
                label="Age"
                defaultValue={''}>
                <MenuItem value={'Cocina'} component={Link} to={"/category/Cocina"}>Cocina</MenuItem>
                <MenuItem value={'Bano'} component={Link} to={"/category/Bano"}>Baño</MenuItem>
                <MenuItem value={'Habitacion'} component={Link} to={"/category/Habitacion"}>Habitacion</MenuItem>
            </Select>
        </FormControl>
    );
}
