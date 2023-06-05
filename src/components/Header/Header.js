import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='nav-bar'>
            <div>
                <h5 className='logo'>Bikes <FontAwesomeIcon icon={faMotorcycle}></FontAwesomeIcon> Valley</h5>
            </div>
            <div className='nav-link'>
                <a href="/home">Home</a>
                <a href="/bikes">Bikes</a>
                <a href="/shop">Shop</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    );
};

export default Header;