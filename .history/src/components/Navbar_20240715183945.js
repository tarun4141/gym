import React from 'react'
import {Link} from 'react-router-dom';
import {tack} from '@mui/material'

import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack>
        <Link to="/">
        <img src={Logo} alt="Logo" />
        </Link>
    </Stack>
  )
}

export default Navbar
