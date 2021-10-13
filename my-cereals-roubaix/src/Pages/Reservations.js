
import React, {useState} from "react";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import axios from "axios";
/** Page réservation */
const Reservations = () => {
    /* Utulisation de l'API pour notre formulaire réservation de table*/
    const url = "http://localhost:4000/my-cereals-roubaix/react-backend/index.php";
    const [data, setData] = useState({
        NOM_Prenom: "",
        Email: "",
        Date: "",
        Heure: "",
        Nombre_Places: ""
    })

    function submit(e) {
        e.preventDefault();
        axios.post(url,{
            NOM_Prenom: data.NOM_Prenom,
            Email: data.Email,
            Date: data.Date,
            Heure: data.Heure,
            Nombre_Places: data.Nombre_Places
        })
        .then(res => {
            console.log(res.data)
        })
    }

    function handle(e){
        const newdata= { ...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return (
        <div className="Reservation">

            {/* En tête de page*/}
            <Header />
            
            {/* Les formules adultes et enfants */}
            <div className="blocs">
                <img src="./images/Brunch.jpg" alt="Photos boisson 1" className="img"/>
                <div className="wrappers">
                    <h3>Formule Unique</h3>
                    <p className="prix">18 €</p>
                    <h3 className="h3">Formule duo</h3>
                    <p className="prix">32 € </p>

                    <p>
                        <span className="brunch">
                            Un taost avocat saumon ou chève miel <br />
                            Un egg muffin bacon <br/>
                            Un fromage blanc avec du miesli et des fruits <br />
                            Un jus d'orange pressé ou un Smoothie <br />
                            Un boisson chaud au choix.
                        </span>
                    </p>
                    <h3>Formule Enfants </h3>
                    <p className="prix"> 10 € </p>

                    <p>
                        <span className="brunch">
                            Un egg muffin bacon <br/>
                            Un pancake <br />
                            Un pain au chocolat ou un croissant <br />
                            Une compote <br />
                            Une surpirise.
                        </span>
                    </p>

                </div> 
            </div>

            {/* Réservation en ligne selon votre creneau*/}
            <div className="creneau">
                <h3>Réservez vous une table selon un créneau</h3>
                
                <form onSubmit={(e) =>submit(e)} className="formulaire" >
                    <input 
                       onChange={(e)=>handle(e)} id="NOM_Prenom" 
                       value={data.NOM_Prenom} placeholder="Nom et Prenom" 
                       type="text" className="input"
                    />
                    <br />
                    <input
                       type="text" className="input" 
                       value={data.Email} placeholder="email"
                       onChange={(e) =>handle(e)} id="Email"
                    />
                    <br />
                    <input 
                       onChange={(e)=>handle(e)} id="Date" 
                       value={data.Date} placeholder="date" 
                       type="date" className="input"
                    />
                    <br />
                    <input 
                       onChange={(e)=>handle(e)} id="Heure" 
                       value={data.Heure} placeholder="Heure" 
                       type="time" className="input"
                    />
                    <br />
                    <input 
                       onChange={(e)=>handle(e)} id="Nombre_Places" 
                       value={data.Nombre_Places}
                       placeholder="Nombre de places" 
                       type="number" className="input"
                    />
                    <br />
                    <button>Confirmer votre réservation</button>
                </form>
            </div>
            <Footer />
        </div>

    );
};

export default Reservations;


