import axios from 'axios';

// Remplacez par votre URL d'API
const API_URL = 'https://127.0.0.1:8000/api';

const fetchReviews = async () => {
    try {
        const response = await axios.get(`${API_URL}/avis`);
        console.log('Avis reçus :', response.data);
        return response.data;
    } catch (error) {
        if (error.response) {
            // La requête a été faite et le serveur a répondu avec un status différent de 2xx
            console.error('Erreur de réponse du serveur :', error.response.data);
            console.error('Code de statut :', error.response.status);
            console.error('En-têtes :', error.response.headers);
        } else if (error.request) {
            // La requête a été faite, mais aucune réponse n'a été reçue
            console.error('Aucune réponse reçue :', error.request);
        } else {
            // Quelque chose s'est passé lors de la configuration de la requête qui a déclenché une erreur
            console.error('Erreur lors de la configuration de la requête :', error.message);
        }
        console.error('Configuration de la requête :', error.config);
        throw error; // Relancer l'erreur pour qu'elle puisse être gérée ailleurs si nécessaire
    }
};

const fetchMovies = async () => {
    try {
        const response = await axios.get(`${API_URL}/films`);
        console.log('Films reçus :', response.data);
        return response.data;
    } catch (error) {
        if (error.response) {
            // La requête a été faite et le serveur a répondu avec un status différent de 2xx
            console.error('Erreur de réponse du serveur :', error.response.data);
            console.error('Code de statut :', error.response.status);
            console.error('En-têtes :', error.response.headers);
        } else if (error.request) {
            // La requête a été faite, mais aucune réponse n'a été reçue
            console.error('Aucune réponse reçue :', error.request);
        } else {
            // Quelque chose s'est passé lors de la configuration de la requête qui a déclenché une erreur
            console.error('Erreur lors de la configuration de la requête :', error.message);
        }
        console.error('Configuration de la requête :', error.config);
        throw error; // Relancer l'erreur pour qu'elle puisse être gérée ailleurs si nécessaire
    }
};

// Exemple d'appel aux fonctions
fetchReviews().then(data => console.log(data)).catch(err => console.error(err));
fetchMovies().then(data => console.log(data)).catch(err => console.error(err));