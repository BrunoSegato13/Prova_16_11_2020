import React from 'react';
import logo from '../../assets/logo.png'
import './index.css'


function Header(){

  return(
    <>
    
        <div className="menu">
            <div className="logo">
                <img src={logo} alt="Logo SnapPacking"/>
            </div>
            <ul className="menu-links">
                <li><a href="#">Produto</a></li>
                <li><a href="#">Funcionalidades</a></li>
                <li><a href="#">Preço</a></li>
                <li><a href="#">Contato</a></li>

            </ul>
        </div>
        
    </>
    
  )
}

export default Header;