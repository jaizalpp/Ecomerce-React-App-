import React from 'react'
import './Footer.css'




function Footer() {
  return (
    <footer className='footer'>
        &copy; Shopping Cart's {new Date().getFullYear()}
    </footer>
  )
}

export default Footer