import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Dropdown from './Dropdown';

function Burger() {

    const [showLinks, setShowLinks] = useState(false)
    const active_burger = () => {
        setShowLinks(!showLinks)
        console.log("ça click")
    }

    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
      };
// ajout du click sur le menu burger
        // function active_burger(event) {
        //     event.preventDefault();
        //     console.log("ça click")
        // }

    return (
            <div onClick={active_burger} className={`button_burger ${showLinks ? "active span" : ""}`}> 
            <span></span>
            {/* <img src=".\img\logo.png" alt="logo" className="bouton-logo"/> */}
            <nav className={`nav_burger ${showLinks ? "burger-open" : "burger-close"}`}>
            <NavLink exact to="/" activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to="Histoire" activeClassName="nav-active">
                Notre Histoire
            </NavLink>
            <NavLink exact to="Produits" activeClassName="nav-active"  onMouseEnter={onMouseEnter}>
                Nos Produits {dropdown && <Dropdown />} 
            </NavLink>
            <NavLink exact to="Réservations" activeClassName="nav-active">
                Réservations
            </NavLink>
            <NavLink exact to="Contact" activeClassName="nav-active">
            Contact
            </NavLink>
            <NavLink exact to="Français" activeClassName="nav-active">FR</NavLink>
            <NavLink exact to="Anglais" activeClassName="nav-active">EN</NavLink>
            </nav>
        </div>
    );
    };


export default Burger;