import Joi from 'joi';



export const contactSchema = Joi.object({
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
