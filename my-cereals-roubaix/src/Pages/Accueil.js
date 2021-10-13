import React from 'react';
import Formulaire from '../Components/Formulaire';
import Header from '../Components/Header';
import Social from '../Components/Social';
import Footer from "../Components/Footer";
/* Page d'accueil */
const Accueil = () => {
    
    return (
        <div className = "Acceuil">
            {/* En tête de page*/}
            <Header />

            {/* page d'accueil qui contient l'image d'accueil*/}
            <div className="pageaccueil">

            </div>

            {/*Formulaire de contact, Adresse et contact*/}
            <div className="bloc">
                {/* Formulaire de contact*/}
                <Formulaire />
                {/* Agresse et téléphone*/}
                <div className="blocs">
                    <img src="./images/accueil1.png" alt="photos" className="img1"/>
                    
                    <div className="wrappers">
                        <p>
                        <span>
                            Adresse et Téléphone 
                        </span> <br />

                        <span>
                            7ter Avenue Jean-Baptiste Le bas
                        </span> <br />
                        
                        <span> 
                            59100 Roubaix 
                        </span> <br />

                        <span>  
                            Tel: 03 20 47 77 42
                        </span>
                        </p>
                    </div>
                </div> 
            </div>
            <hr />
            {/* contact sur les réseau sociaux( faceook, instagram et snapchat*/}


            <Social />
            {/* Image page bas*/}
            <div className="pagebas">
                
            </div>
            {/* Le footer*/}
            <Footer /> 

        </div>
    );
};

export default Accueil;

