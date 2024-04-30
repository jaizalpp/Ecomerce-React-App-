import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <div>
        <header className='header'>
          <Link to='/' style={{textDecoration:'none', color:"#fff"}}>
               <h1>Shopping Cart's</h1>
          </Link>
            
            <Link to='/logout'>
                <button className="logout-btn">Log Out</button>
            </Link>
            
        </header>
    </div>
  )
}

export default Header 