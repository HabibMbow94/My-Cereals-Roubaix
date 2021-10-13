import Header from '../Components/Header';
import Footer from '../Components/Footer';
import React from 'react';

/** Page histoire de My Cereals */
const Histoire = () => {
    return (
        <div className="Histoire">
            {/* En tête de page*/}
            <Header/>

            {/* Histoire de My cereals */}
            <div className= "paragraphe1">
                <p> My Cereal's est un bar à céréals proposant des produits US tels que des boissons US et des barres chocolatées et bien sûre des céréales (Reeses Puffs, Oréo,
                    Cap'n'crunch, Pokémon et bien plus encore...).
                </p>

                <p> Ce concept a été en juillet et 2019 après la découverte d'un bar à céréales à Londres.</p>
            </div>

            <div class="timeline-section">
                <div class="timeline-items">
                    {/* Histoire de My cereals en 2019*/}
                    <div class="timeline-item">
                        <div class="timeline-dot">2019</div>
                        <div class="timeline-date"></div>
                        <div class="timeline-content">
                            <p className="juillet"><span>juillet :</span> Clé en main, on débute les travaux pour une ouverture en Septembre</p>
                            <hr className="hr1" />
                            <p className="septembre"><span>Septembre :</span> On est dans les temps! <br /> C'est l'ouverture de My Cereal's!</p>
                            <hr className="hr2" />
                        </div>
                    </div>
                    
                    <div class="timeline-item">
                        {/* Histoire de My cereals en 2020*/}
                        <div class="timeline-dot">2020</div>
                        <div class="timeline-date"></div>
                        <div class="timeline-content">
                            <p className="mars"><span>Mars :</span> La covid-19 est venu nous envahir, on est contraint de fermer comme beaucoup. A l'arrêt total pour quelques temps...</p>
                            <hr className="hr3" />
                            <p className="avril"><span>Avril :</span> Pour sortir le tête de l'eau, on essaye de lancer les livraisons des produits US. ça nous permet d'attirer une nouvelle clientèle et de retrouver peu à peu le sourire!</p>
                            <hr className="hr4" />
                            <p className="juin"><span>Juin :</span> Reprise de l'activité! ça n'a pas été facile avec le télé-travail et les cours distanciel! Nos clients ne sont pas sur place mais garde l'espoir de tous vous retrouver!</p>
                            <hr className="hr5" />
                            <p className="juillet1"><span>Juillet :</span> Evènement avec la ville de Roubaix. Relancement de My Cereal's, on est très content de voir qu'on est de plus en plus suivi!</p>
                            <hr className="hr6" />
                            <p className="novembre"><span>Novembre :</span> Lancement des crêpes sucrées, salées, salades, milkshakes, smoothies et mojitos à emporter et en livraison. Arrivée du deuxième confinement... On décide de fermer 6 mois afin de reconstiture l'équipe, d'effectuer quelques travaux et d'établir un nouveau plan pour la salle du bar à céréales.</p>
                            <hr className="hr7" />
                        </div>
                    </div>
                    
                    <div class="timeline-item">
                        {/* Histoire de My cereals en 2021 */}
                        <div class="timeline-dot">2021</div>
                        <div class="timeline-date"></div>
                        <div class="timeline-content">
                            <p className="avril1"><span>Avril :</span> Enfin la réouver!<br /> Livraison à domicile</p>
                            <hr className="hr8" />
                            <p className="juin1"><span>Juin :</span> Livraison sur les plateformes Uber et Just Eat. Mise en place de la carte de fidélité avec une remise de 20% une fois la carte complète</p>
                            <hr className="hr9" />
                            <p className="aout"><span>Août :</span> Maintenant sur Délivroo!</p>
                            <hr className="hr10" />
                            <p className="septembre1"><span>Septembre :</span> Reprise des évènements. On souhaite redynamiser My cereal's, alors venez nombreux!</p>
                            <hr className="hr11" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Le footer*/}
            <Footer />
        </div>
    );
};

export default Histoire;