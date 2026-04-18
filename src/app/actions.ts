'use server'

import { db } from '@/lib/db';

// Récupération des données du formulaire
export async function submitForm(formData: FormData) {
  const civilite = formData.get('civilite');
  const nom = formData.get('nom');
  const prenom = formData.get('prenom');
  const email = formData.get('email');
  const telephone = formData.get('telephone');
  const messageType = formData.get('messageType');
  const message = formData.get('message');

  try {
    /* Insertion dans la table de la BDD, la table contient:
        - id (clé primaire, automatique)
        - civilite
        - nom
        - prenom
        - email
        - telephone
        - message_type
        - message
        - created_at (date de message, automatique)
    */
    const [result] = await db.execute(
      'INSERT INTO contacts (civilite, nom, prenom, email, telephone, message_type, message) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [civilite, nom, prenom, email, telephone, messageType, message]
    );

    // Simple Pop Up si réussite ou échec
    return { success: true, message: 'Message envoyé avec succès !' };
  } catch (error) {
    return { success: false, message: 'Erreur lors de l\'envoi du message.' };
  }
}
