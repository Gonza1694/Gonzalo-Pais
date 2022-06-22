import React from 'react'
import { AppBar, Toolbar, IconButton } from '@mui/material'
import { AccountCircle, ShoppingCart } from '@material-ui/icons';

const NavBar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton edge="start" color="inherit" aria-label="menu" style={{ marginRight: 'auto' }}>
            Online Store
          </IconButton>
          <IconButton>
            <ShoppingCart />
          </IconButton>
          <IconButton>
            <AccountCircle/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar