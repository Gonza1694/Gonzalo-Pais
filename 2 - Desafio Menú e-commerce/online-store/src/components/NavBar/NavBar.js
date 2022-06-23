import React from 'react'
import { AppBar, Toolbar, IconButton, TextField } from '@mui/material'
import { AccountCircle, ShoppingCart } from '@material-ui/icons';

//TODO: Remove unusing divs/classes
const NavBar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className='logo'>
            <IconButton edge="start" color="inherit" aria-label="menu" style={{ marginRight: 'auto' }}>
              Online Store
            </IconButton>
          </div>
          <div className='searchField'>
            <TextField id="outlined-search" label="" type="search" variant="outlined" size='small' margin="dense" style={{backgroundColor:'#fff', borderRadius:'6px'}} placeholder="Search..." />
          </div>
          <div className='navButtons'>
            <IconButton>
              <ShoppingCart />
            </IconButton>
            <IconButton>
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar