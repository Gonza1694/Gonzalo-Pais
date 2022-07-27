import React from 'react'
import './NavBar.css'
import Logo from './Logo/Logo'
import Category from './Category/Category'
import CartWidget from './Cart/CartWidget'
import { AppBar, Toolbar, IconButton, TextField } from '@mui/material'
import { AccountCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <AppBar position="static" className='app-bar'>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link style={{ textDecoration: 'none' }} to="/">
            <Logo />
          </Link>
          <TextField id="outlined-search" label="" type="search" variant="outlined" size='small' margin="dense" placeholder="Search..." />
          <div className='navButtons'>
            <Category />
            <IconButton component={Link} to="/cart">
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