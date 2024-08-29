// Import des modules requis
import dotenv from 'dotenv';
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import Joi from 'joi';

// Charger les variables d'environnement
dotenv.config();

// Créer une application Express
const app = express();
const PORT = 1234;

// Configuration CORS
const corsOptions = {
    origin: 'http://localhost:5173', // Remplacez par votre domaine
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type'
};
app.use(cors(corsOptions));
app.use(express.json());

// Définir le schéma de validation
const contactSchema = Joi.object({
    firstname: Joi.string()
        .required()
        .error(() => new Error("Veuillez saisir votre prénom.")), // Correction ici

    lastname: Joi.string()
        .required()
        .error(() => new Error("Veuillez saisir votre nom.")), // Correction ici

    email: Joi.string()
        .email({ tlds: { allow: false } }) // Utilisation de "allow: false" pour désactiver la vérification des TLD
        .required()
        .error(() => new Error("Veuillez saisir une adresse email valide.")), // Correction ici

    phone: Joi.number()
        // .pattern(/^\+\d{1,3}\s\d{10}$/)
        .optional()
        .error(() => new Error("Veuillez saisir un numéro de téléphone valide (format international).")), // Correction ici

    object: Joi.string()
        .max(50)
        .optional()
        .error(() => new Error("L'objet ne doit pas dépasser 50 caractères.")), // Correction ici

    message: Joi.string()
        .required()
        .min(10)
        .max(500)
        .error(() => new Error("Votre message doit contenir entre 10 et 500 caractères.")), // Correction ici

    acceptance: Joi.boolean()
        .required()
        .valid(true)
        .error(() => new Error("Vous devez accepter les conditions d'utilisation.")) // Correction ici
});

// Créer un transporteur Nodemailer
const transporter = nodemailer.createTransport({
    host: 'ssl0.ovh.net',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_APP,
        pass: process.env.EMAIL_PASS
    }
});

// Route pour gérer l'envoi d'email
app.post('/send-email', (req, res) => {

    // console.log('Request body:', req.body);
    const { error } = contactSchema.validate(req.body, { abortEarly: true });

    if (error) {
        const errorMessages = error.details
            ? error.details.map(detail => detail.message).join(', ')
            : 'Erreur de validation inconnue.';
        console.error('Validation error:', errorMessages); // Loggez les erreurs pour le débogage
        return res.status(400).json({ message: errorMessages });
    }

    const { firstname, lastname, email, phone, object, message, acceptance } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_APP,
        to: process.env.EMAIL_APP,
        subject: `Contact Form Submission: ${object}`,
        text: `
        First Name: ${firstname}
        Last Name: ${lastname}
        Email: ${email}
        Phone: ${phone}
        Object:${object}
        Message: ${message}
        Acceptance: ${acceptance ? 'Yes' : 'No'}
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ message: error.toString() });
        }
        res.json({ message: 'Email sent: ' + info.response });
    });
});





// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
