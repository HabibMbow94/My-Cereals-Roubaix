import React from 'react';
import { NavLink } from 'react-router-dom';
import Burger from './Burguer';
import Logo from './Logo';
import Navigations from './Navigations';

const Header = () => {
    return (
        <div className = "Header">
            <Burger />
            <Navigations />
            <NavLink exact to="/" >
                <Logo />
            </NavLink>
            
            
        </div>
    );
};

export default Header;