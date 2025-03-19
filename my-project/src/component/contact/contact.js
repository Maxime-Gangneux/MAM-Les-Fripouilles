import React, { useState, useEffect } from "react";
import location from "../../assets/location.svg";
import phone from "../../assets/phone.svg";
import mail from "../../assets/mail.svg";
import clock2 from "../../assets/clock2.svg";
import "./contact.css";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('');

  useEffect(() => {
    emailjs.init('aAELsOFBXGyWniLFo'); // Remplace avec ton user ID d'EmailJS
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2yldtbm', 'template_w06g2qf', e.target, 'aAELsOFBXGyWniLFo')
      .then((result) => {
        console.log(result.text);
        setStatus('Message envoyé avec succès !');
        setStatusType('success'); // Indique le succès
        e.target.reset(); // Réinitialiser le formulaire après envoi

        // Réinitialiser le statut après 3 secondes
        setTimeout(() => {
          setStatus('');
          setStatusType('');
        }, 3000);
      }, (error) => {
        console.log(error.text);
        setStatus('Erreur lors de l\'envoi du message. Veuillez réessayer.');
        setStatusType('error'); // Indique l'erreur

        // Réinitialiser le statut après 3 secondes
        setTimeout(() => {
          setStatus('');
          setStatusType('');
        }, 3000);
      });
  };

  return (
    <div id = "contact" className="contact">
      <div className="contact-container">
        <div className="contact-card-container">
          <div className="contact-card">
            <img className="contact-card-image" src={location} alt="Localisation" />
            <h3 className="contact-card-title">Adresse</h3>
            <p className="contact-card-text">
              43 Rue Principale, 
              <br />
              68210 Romagny
            </p>
          </div>
          <div className="contact-card">
            <img className="contact-card-image" src={phone} alt="Téléphone" />
            <h3 className="contact-card-title">Téléphone</h3>
            <p className="contact-card-text">+33 6 14 02 56 58</p>
          </div>
          <div className="contact-card">
            <img className="contact-card-image" src={mail} alt="Mail" />
            <h3 className="contact-card-title">E-mail</h3>
            <p className="contact-card-text">mam.lesfripouilles68@gmail.com</p>
          </div>
          <div className="contact-card">
            <img className="contact-card-image" src={clock2} alt="Bureau" />
            <h3 className="contact-card-title">Horraires d'ouverture</h3>
            <p className="contact-card-text">
              6h30 - 18h30
              <br/>
              du lundi au vendredi
            </p>
          </div>
        </div>
        <div className="contact-form-container">
            <div className="contact-form-paragraphe">
                <h4 className="contact-form-paragraphe-title">CONTACTEZ NOUS </h4>
                <p className="contact-form-paragraphe-text">
                    <strong>Vous avez une question ou souhaitez en savoir plus sur notre MAM ?</strong>
                    <br/>
                </p>
                <p className="contact-form-paragraphe-text">
                    N’hésitez pas à nous contacter via le formulaire ci-dessous. Nous serons ravis de répondre à vos demandes concernant l’accueil de votre enfant, les disponibilités ou toute autre information.
                    <br/>
                    Nous reviendrons vers vous dans les plus brefs délais !
                </p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Nom :</label>
                <input type="text" id="name" name="name" required placeholder="Votre nom" />

                <label htmlFor="email">Email :</label>
                <input type="email" id="email" name="email" required placeholder="Votre adresse email" />

                <label htmlFor="subject">Sujet :</label>
                <input type="text" id="subject" name="subject" required placeholder="Le sujet de votre message" />

                <label htmlFor="message">Message :</label>
                <textarea id="message" name="message" required placeholder="Votre message"></textarea>

                <button type="submit" className="submit-button">SOUMETTRE</button>
            </form>
            {status && (
              <div className={`notification ${statusType}`}>
                {status}
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
