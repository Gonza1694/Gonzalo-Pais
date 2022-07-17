import React from 'react'
import './NavBar.css'
import Logo from './Logo/Logo'
import CartWidget from './Cart/CartWidget'
import { AppBar, Toolbar, IconButton, TextField } from '@mui/material'
import { AccountCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom'

//TODO: Remove unusing divs/classes
const NavBar = () => {
  return (
    <>
      <AppBar position="static" className='app-bar'>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton component={Link} to="/">
            <Logo />
          </IconButton>
          <TextField id="outlined-search" label="" type="search" variant="outlined" size='small' margin="dense" placeholder="Search..." />
          <div className='navButtons'>
            <IconButton>
              <CartWidget />
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