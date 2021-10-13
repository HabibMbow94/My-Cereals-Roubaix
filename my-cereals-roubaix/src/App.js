
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Accueil from './Pages/Accueil';
import Histoire from './Pages/Histoire';
import Produits from './Pages/Produits';
import Reservations from './Pages/Reservations';
import contact from './Pages/Contact';
import notfound from './Pages/Notfound';
import Sucres from './Components/Sucres';
import Boissons from './Components/Boissons';
import Sales from './Components/Sales';

function App() {
  return (
    <BrowserRouter> 
      <Switch>
        <Route path="/" exact component={Accueil} />
        <Route path="/Histoire" exact component={Histoire} />
        <Route path="/Produits" exact component={Produits} />
        <Route path="/Sales" exact component={Sales} />
        <Route path="/Sucres" exact component={Sucres} />
        <Route path="/Boissons" exact component={Boissons} />
        <Route path="/Réservations" exact component={Reservations} />
        <Route path="/Contact" exact component={contact} />
        <Route component={notfound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
