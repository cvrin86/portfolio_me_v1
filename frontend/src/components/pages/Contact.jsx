import React, { useState } from 'react';
import { scrollToSection } from "../../utils/functions"
import { contactSchema } from '../../utils/valid';


const Contact = () => {


    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        object: '',
        message: '',
        acceptance: false



    })

    const handleChange = (event) => {
        const { id, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [id]: type === 'checkbox' ? checked : value
        })

    }

    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { error } = contactSchema.validate(formData, { abortEarly: false });

        if (error && error.details) {
            // Extraire et afficher les messages d'erreur
            const errorMessages = error.details.map((detail) => detail.message).join('\n');
            console.error(errorMessages);
            alert(`Veuillez corriger les erreurs dans le formulaire :\n\n${errorMessages}`);
            return;
        }



        try {
            const response = await fetch('http://localhost:1234/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)

            })

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Erreur serveur:', errorText);
                throw new Error('La réponse du serveur n\'était pas correcte.');
            }

            const responseData = await response.json();
            console.log(responseData.message);
            alert('Your message has been sent successfully');
            scrollToSection('banner');



            // Handle success, e.g., show a success message to the user
        } catch (error) {
            console.error('Error:', error);
            alert('Une erreur est survenue. Veuillez réessayer.');
        }

        setFormData({
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            object: '',
            message: '',
            acceptance: false
        })
    }
    return (
        <section className='contact' id='contact'>
            <h1 className='contact-title'>Contactez-moi</h1>
            <p className='contact-description'>
                Vous pouvez me contactez via le formulaire ou les liens proposés, je vous répondrai dans les meilleurs délais.
            </p>
            <div className="contact-details">
                <form className='form-box' onSubmit={handleSubmit}>
                    <div className="form-content">
                        <div className="form-content-detail">
                            <label htmlFor="firstname"> Nom <span className='asterisk'>*</span></label>
                            <input type="text" placeholder='Nom' id='firstname' name='firstname'
                                value={formData.firstname}
                                onChange={handleChange}
                                required />
                        </div>
                        <div className="form-content-detail">
                            <label htmlFor="lastname"> Prénom <span className='asterisk'>*</span></label>
                            <input type="text"
                                placeholder='Prénom'
                                id='lastname'
                                name='lastname'
                                value={formData.lastname}
                                onChange={handleChange}
                                required />
                        </div>
                        <div className="form-content-detail">
                            <label htmlFor="email"> E-Mail <span className='asterisk'>*</span></label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder='E-mail'
                                value={formData.email}
                                onChange={handleChange}

                                required />
                        </div>
                        <div className="form-content-detail">
                            <label htmlFor="tel"> Téléphone</label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                placeholder='Nr. de téléphone'
                                value={formData.phone}
                                onChange={handleChange} />
                        </div>
                        <div className="form-content-detail">
                            <label htmlFor="object">Objet </label>
                            <input
                                type="text"
                                name="object"
                                id="object"
                                placeholder='Objet'
                                value={formData.object}
                                onChange={handleChange} />
                        </div>
                        <div className="form-content-detail">
                            <label htmlFor="message"> Message <span className='asterisk'>*</span></label>
                            <textarea
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder='Votre message'
                                cols="30"
                                rows="10"
                                required></textarea>
                        </div>
                        <div className="required">
                            <p><small ><span className='asterisk'>*</span> Champ obligatoire</small></p>
                        </div>
                        <div className="form-control">
                            <label>
                                <input
                                    type="checkbox"
                                    name="acceptance"
                                    id="acceptance"
                                    checked={formData.acceptance}
                                    onChange={handleChange}

                                    required />
                                <span className='terms'>En soumettant ce formulaire, j'accepte que mes données personnelles soient utilisées pour me recontacter. Aucun autre traitement ne sera effectué avec mes informations. Pour connaître et exercer vos droits, veuillez consultez la <a href="/policy-privacy">Politique de confidentialité</a>.</span>
                            </label>
                        </div>

                    </div>
                    <div className="btn-submit">
                        <input type="submit" value="Envoyer" />
                    </div>

                </form>
                <div className="info-contact">
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
                                <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
                                <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                            </svg>
                            <a href="mailto:contact@cris-vrancea.fr">contact@cris-vrancea.fr</a>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                            </svg>
                            <a href="0788417190">0788417190</a>
                        </li>
                        <li>

                            <address>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                                </svg>
                                94100 Saint Maur des Fossées
                            </address>
                        </li>
                    </ul>
                </div>
            </div>


        </section>
    );
}

export default Contact;
