import React from 'react';

const FormTable = () => {

    return (
       <div className="creneau">
           
            <h3>Réservez vous selon un créneau</h3>
            
            <form className="formulaire" >
                
               <input id="name" placeholder="Nom et Prenom" type="text" className="input"></input>
               <br />
               <input type="text" className="input" placeholder="email" id="email"></input>
               <br />
              
               <input  id="date" placeholder="date" type="date" className="input"></input>
               <br />
               <input  id="time"  placeholder="time" type="time" className="input"></input>
               <br />
               <input id="place" placeholder="Nombre de places" type="number" className="input"></input>
               <br />
               <button>confirmer votre réservation</button>
          </form>
            
        </div>
    );
};

export default FormTable;