import React from 'react'
import './NavBar.css'
import Logo from './Logo/Logo'
import Category from './Category/Category'
import CartWidget from './Cart/CartWidget'
import { AppBar, Toolbar, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <AppBar position="static" className='app-bar'>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link style={{ textDecoration: 'none' }} to="/">
          <Logo />
        </Link>
        <div className='navButtons'>
          <Category />
          <IconButton component={Link} to="/cart" >
            <CartWidget />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar