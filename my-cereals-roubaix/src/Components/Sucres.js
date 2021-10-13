import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Sucres = () => {
    return (
        <div className="Sucres">
            <Header />
            <div className="blocs">
                <img src="./images/sucre1.jpg" alt="crêpes sucres " className="sucre1"/>
                <div className="wrappers">
                    <h3>Nos crêpes</h3>
                    <p>
                        <span className="prix">
                            Le bretonne : 4.5€
                        </span> <br />
                           
                        <span className="sucre">
                             Crême Spéculoos - Kinder Maxi -Palet Breton
                        </span>
                    </p>

                    <p>
                        <span className="prix">
                           Strawberry : 5€
                        </span> <br />
                           
                        <span className="sucre">
                            Caramel beurre salé - Oréo Fraise - Nappage Nutella
                        </span>
                    </p>

                    <p>
                        <span className="prix">
                           My Cereals : 5.50€
                        </span> <br />
                           
                        <span className="sucre">
                            Reese's Cup - Shoko-Bons - Nappage Nutella
                        </span>
                    </p>

                    <p>
                        <span className="prix">
                           Speculoos : 4.5 €
                        </span> <br />
                           
                        <span className="sucre">
                            Crème Spéculoos - Schokobons - Chocolat blanc - coulis Spéculoos
                        </span>
                    </p>

                    <p>
                        <span className="prix">
                           La coco : 4.50 €
                        </span> <br />
                           
                        <span className="sucre">
                            Nutella - coco - Banane
                        </span>
                    </p>
                    <h3 className="h3">Je compose ma crêpe sucré...</h3>
                </div>
            </div>

            <div className="blocs">
                <img src="./images/sucre2.jpg" alt="Photos boisson 1" className="sucre2"/>
                <div className="wrappers">
                   
                    <hr />

                    <h3>Nos Céréales</h3>

                    <h3 className="h3">Je compose mon bol de céréales</h3>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Sucres;