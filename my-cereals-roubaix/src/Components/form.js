import React, {useState} from 'react';
import{ init } from 'emailjs-com';
init("user_msa7KfhkekkFlLuIjGmv3");

const FormEmail = () => {
    const [name, setName] = useState("");
    const [prenom, setPrenom] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    const isEmail = () => {
        let mail = document.getElementById("not-mail");
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        
        if(email.match(regex)) {
            mail.style.display = 'none';
            return true ;
        } else {
            mail.style.display = 'block';
            mail.style.animation = 'dongle 1s';
            setTimeout(() => {
                mail.style.animation = 'none';
            }, 1000);
            return false;
        }
    
    };
    
    const failMessage = (message) => {
        let formMess = document.querySelector('.form-message');
        
        formMess.innerHTML = message;
        formMess.style.opacity = "1";
        formMess.style.background = "rgb(253, 87, 87)";
        
        document.getElementById('name').classList.add('error');
        document.getElementById('email').classList.add('error');
        document.getElementById('message').classList.add('error');
    };

    const successMessage = () => {
        let formMess = document.querySelector('.form-message');
  
        formMess.innerHTML = "Message envoyé ! Nous vous contacterons dès que possible.";
        formMess.style.background = "#00c1ec";
        formMess.style.opacity = "1";
  
        document.getElementById('name').classList.remove('error');
        document.getElementById('email').classList.remove('error');
        document.getElementById('message').classList.remove('error');
  
        setTimeout(() => {
            formMess.style.opacity = '0';
        }, 5000);
    }; 
    
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(name && isEmail() && message) {
            sendFeedback("template_x8mcg4x", {
                name,
                prenom,
                phone,
                email,
                message,
            });
        
        } else {
            failMessage("Merci de remplir correctement les champs requis *");
        }
    };
    
    const sendFeedback = (templateId, variables) => {
        
        window.emailjs
        .send("gmail", templateId, variables)
        .then((res) => {
            successMessage(); 
            setName("");
            setPrenom("");
            setPhone("");
            setEmail("");
            setMessage("");
        })
        .catch(
            (err) => {
                failMessage("Une erreur s'est produite, veuillez réessayer.");
            }
        );
         /* document.querySelector('.form-message').innerHTML =
            "") */
    };
    
    return (
    <div className="container">
        <form className="contact-form">
            <h2>Nous Contacter</h2>
            <div className="form-content">
                <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="NOM *"
                value={name}
                autoComplete="off"
                /> <br />
                
                <input
                type="text"
                id="prenom"
                className="phone"
                name="prenom"
                onChange={(e) => setPrenom(e.target.value)}
                placeholder="Prénom *"
                value={prenom}
                /> <br />
                
                <input
                type="text"
                id="phone"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Téléphone"
                value={phone}
                /> <br />
                
                <div className="email-content">
                    <label id="not-mail">Email non valide</label>
                    <input
                    type="mail"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Adresse email *"
                    value={email}
                    autoComplete="off"
                    /> <br /> <br />
                    
                </div>
                <textarea
                       id="message"
                       name="message"
                       onChange={(e) => setMessage(e.target.value)}
                       placeholder="Message *"
                       value={message}
                    /> <br />

                
            </div> 
            
            <input
               className="button"
               type="button"
               value="Envoyer"
               onClick={handleSubmit}
            />
            
            <div className="form-message"></div>
        </form>
    </div>
    );
};

export default FormEmail;



/*import emailjs from 'emailjs-com'
import React from 'react';

const Mailer = () => {
    function sendEmail (e) {
        e.preventDefault();

        emailjs.sendForm(
        'service_sut0bhr',
        'template_5jr7tjl',
        e.target,
        'user_3UwtezsmgDmDpR8yrgHAT'
        ).then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
    }
    return (
        <div className='main'>
            
            <div className='contact1'>
                <h2>NOUS CONTACTER</h2>
                
                <form onSubmit={sendEmail}>
                    
                    <div className='form-grid'>
                        <div>
                            <label htmlFor="name">Nom</label>
                            <input  placeholder="NOM *" type="text"/>
                        </div>

                        <div>
                            <label htmlFor="name">Nom</label>
                            <input  placeholder="Prénom *" type="text"/>
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email"/>
                        </div>
                        
                        <div className="textarea">
                            <label htmlFor='message'>Message</label>
                            <textarea></textarea>
                        </div>
                    </div>
                    <input type='submit' className="button" value='Send Message'/>
                </form>
            </div>
            
            <div className="animation">
                <div className="words word-1">
                    <span>MY</span>
                    <span>C</span>
                    <span>E</span>
                    <span>R</span>
                    <span>E</span>
                    <span>A</span>
                    <span>L</span>
                    <span>S</span>
                </div>
                <div className="words word-2">
                    <span>I</span>
                    <span>S</span>
                </div>
                <div className="words word-3">
                    <span>L</span>
                    <span>I</span>
                    <span>F</span>
                    <span>E</span>
                </div>
            </div>
        </div>
    );
}

export default Mailer;*/
