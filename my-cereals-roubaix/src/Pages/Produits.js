import React from 'react';
import Footer from '../Components/Footer';

import Header from '../Components/Header';
/** Page produits qui contient trois sous pages de produits (Sales, Sucres, Boissons) */
const Produits = () => {
    return (
        <div className="Produits">

            {/* En tête de page*/}
            <Header />
            <div className="blocs">
                
                <img src="./images/sale1.jpg" alt="images crêpes sales" className="img1 sale1"/>
                <div className="wrappers">
                    <h3>Nos Crêpes</h3>
                    <p>
                        <span className="prix">
                            Savoyarde : 6.50 € 
                        </span> <br />
                           
                        <span className="boisson">
                            Jambon de dinde - Oignons, Reclette PDT - Crème fraîche - sauce au choix
                        </span>
                    </p>

                    <p>
                        <span className="prix">
                            Chilli : 6.50 € 
                        </span> <br />
                           
                        <span className="boisson">
                            Poulet mariné - Cheddar - Salade - Poivrons - Chilli
                        </span>
                    </p>

                    <p>
                        <span className="prix">
                            Chicken : 7.00 € 
                        </span> <br />
                           
                        <span className="boisson">
                            Poulet mariné - Mozzarelle - Oignons frits - PDT marinées - sauce frommagère - Olives
                        </span>
                    </p>
                </div>
            </div>

            <div className="blocs1">
                <img src="./images/sale2.jpg" alt="Photos boisson 1" className="img1 sale2"/>
                <div className="wrappers">
                    
                    <p className="par">
                        <span className="prix">
                            Saumon : 7.50 € 
                        </span> <br />
                           
                        <span className="boisson">
                            Saumon - Fromage Ail & fines herbes PDT - Oignons - crème fraîche
                        </span>
                    </p>

                    <p className="par">
                        <span className="prix">
                            Weleh : 5.50 €
                        </span> <br />
                           
                        <span className="boisson">
                            Jambon de dinde -Oeuf - Cheddar 
                        </span>
                    </p>

                    <p className="par">
                        <span className="prix">
                            Paysanne : 6.50 €
                        </span> <br />
                           
                        <span className="boisson">
                            Lardons de dinde - Champignons, Oignons - PDT - crème fraîche
                        </span>
                    </p>

                    <p className="par">
                        <span className="prix">
                            Indienne : 5.50 €
                        </span> <br />
                           
                        <span className="boisson">
                            Poulet - Emmental - Champignons - Sauce curry 
                        </span>
                    </p>

                    <p className="par">
                        <span className="prix">
                            Parmentière : 6.50 €
                        </span> <br />
                           
                        <span className="boisson">
                            Viande hacée - Crême fraîche - PDT - Oignons - Sauce au choix 
                        </span>
                    </p>

                    <h3 className="h3">Ou je compose ma crêpe salée</h3>

                </div>
            </div>

            <hr />

            <div className="blocs2">
                <img src="./images/sale3.jpg" alt="Photos boisson 1" className="img1 sale3"/>
                <div className="wrappers">
                    <h3>Nos salades</h3>
                    <p>
                        <span className="prix">
                            Avacado : 7.50 € 
                        </span> <br />
                           
                        <span className="boisson">
                            Saumon - Avocat - Aneth - Salade -  Tomates cerises - Fromage - Ail & Fines herbes - Vinaigrette 
                        </span>
                    </p>

                    <p>
                        <span className="prix">
                            Chèvre : 5. 00 € 
                        </span> <br />
                           
                        <span className="boisson">
                            Salade - Concombre - Fromage de Chèvre - Tomates cerises - Vinaigrette 
                        </span>
                    </p>

                    <p>
                        <span className="prix">
                            César : 5. 00 € 
                        </span> <br />
                           
                        <span className="boisson">
                            Poulet mariné - Salade - Tomates cerises - Comcombre - Mozzarelle - Vinaigrette 
                        </span>
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Produits;


