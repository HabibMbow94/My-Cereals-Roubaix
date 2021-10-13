import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Boissons = () => {
    return (
        <div className="Boissons">
            <Header />
            <div className="blocs">
                <img src="./images/photo_boisson1.jpg" alt="Photos boisson 1" className="Boisson1"/>
                <div className="wrappers">
                    <h3>Nos Miklshakes</h3>
                    <p>
                        <span className="prix">
                            A partir de 4.5€ 
                        </span> <br />

                        <span className="ingredient"> 
                            1 Ingredient aux choix / 1 plat supplément 
                        </span> <br />
                           
                        <span className="boisson">
                             Banane - Fraise - Kinder Bueno - Kinder Bueno White - 
                            Kinder Maxi - Shockobons - Spéculoos - Chocolat Blanc - Reese's Cup -
                            Daim - M&M's KitKat - Twix - Oréa, Snickers - Palet breton Mangue - 
                            Framboise - Ananas - Malttesers
                        </span>
                    </p>
                </div>
            </div>
            <hr />

            <div className="blocs1">
                <img src="./images/photo_boisson2.jpg" alt="Photos boisson 1" className="Boisson2"/>
                <div className="wrappers">
                    <h3>Nos Mojitos</h3>
                    <p className="par">
                        <span className="prix">
                            3.5€ 
                        </span> <br />
                           
                        <span className="boisson">
                            Violette - Fraise - Citron <br /> Kiwi - Ananas - Exotic 
                        </span>
                    </p>
                    <hr />

                    <h3>Nos Esmoothies</h3>
                    <p className="par">
                        <span className="prix">
                            3.5€ 
                        </span> <br />
                           
                        <span className="boisson">
                            Banane - Fraise - Mangue <br /> Framboise - Ananas
                        </span>
                    </p>

                </div>
            </div>
            <hr />

            <div className="blocs">
                <img src="./images/photo_boisson2.jpg" alt="Photos boisson 1" className="boisson1"/>
                <div className="wrappers">
                    <h3>Nos boisson fraises</h3>
                    <p>
                        <span className="prix">
                            A partir de 1.5€ 
                        </span> <br />
                           
                        <span className="boisson">
                             Ice - Tea - Fanta - Orangina - Oasis - Perrier Sprite 
                            Coca cola - Coca cola zero - Coca Cola Cherry - Jus d'orange 2€ - 
                            Jus Multi-fruits 2€ - Jus de pomme 2€ - Jus d'ananas 2€ - RedBull 2.5€ - Boissons US 33cl 
                        </span>
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Boissons;