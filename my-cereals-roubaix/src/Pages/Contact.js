import React from 'react';
import Footer from '../Components/Footer';
import FormEmail from '../Components/form';
import GoogleMap1 from '../Components/GoogleMap';
import Header from '../Components/Header';

/* Page contact */
const Contact = () => {
    return (
        <div className="contact">
            {/* En tête de page*/}
            <Header />

            {/*Formulaire de contact, Adresse et contact*/}
            <div contact1>

                <div>
                    {/* Formulaire de contact*/}
                    <FormEmail />
                    {/* Adresse et contact téléphonique et Email*/}
                    <div className="wrappers">
                        <p>
                            
                            <span>
                            7ter Avenue Jean-Baptiste Le bas
                            </span> <br /> <br />

                            <span> 
                            59100 Roubaix 
                            </span> <br /> <br />
                            
                            <span>
                            mycerealsroubaix@gmail.com 
                            </span> <br /> <br />
                            
                            <span>  
                            Tel: 03 20 47 77 42
                            </span>
                        </p>
                    </div>
                </div>
                {/* Ajout de google map*/}
                <GoogleMap1 />
            </div>

            
            {/* Le footer*/}
            <Footer />
            
        </div>
    );
};

export default Contact;


/*
import React, { useState } from 'react';
import Header from '../Components/Header';
import Axios from 'axios';

const Contact = () => {

    const url ="https://localhost:44349/api/MainMenu/Create"
    const [data, setData] = useState({
        name: "",
        date: "",
        iduser: ""
    });

    function handle(e){
        const newdata= {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    function submit(e) {
        e.preventDefault();
        Axios.post(url,{
            name: data.name,
            date: data.date,
            iduser: data.iduser
        })
        .then(res => {
            console.log(res.data)
        })
    }
    return (
        <div>
            <Header />
            <form onSubmit={(e) =>submit(e)}>
                <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder="name" type="text"></input>
                <input onChange={(e)=>handle(e)} id="date" value={data.date} placeholder="date" type="date"></input>
                <input onChange={(e)=>handle(e)} id="iduser" value={data.iduser} placeholder="time" type="time"></input>
                <input placeholder="iduser" type="number"></input>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Contact;*/