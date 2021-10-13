import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';

const Navigations = () => {
    const [dropdown, setDropdown] = useState(false);

   /* const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
      };
    */
     

    return (
        <div className = "navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to="/Histoire" activeClassName="nav-active">
                Notre Histoire
            </NavLink>
            <NavLink exact to="/Produits" activeClassName="nav-active" 
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
            >
                Nos Produits{dropdown && <Dropdown />} 
            </NavLink>
            <NavLink exact to="/Réservations" activeClassName="nav-active">
                Réservation Brunch
            </NavLink>
            <NavLink exact to="/Contact" activeClassName="nav-active">
                Contact
            </NavLink>
            
        </div>
    );
};

export default Navigations;