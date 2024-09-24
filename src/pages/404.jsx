// Importation de Link depuis react-router-dom pour la navigation
import { Link } from 'react-router-dom';
// Importation de l'image d'erreur 404
import Error404 from '../assets/404.png';
// Importation du fichier CSS pour le style de la page d'erreur
import '../assets/styles/error.css';

function Error() {
  return (
    // Conteneur principal de la page d'erreur
    <main className="error"> 
        <img src={Error404} alt="Erreur 404" />  
        <p>Oups! La page que vous avez demandez n'existe pas.</p>
        <Link className="link" to="/">
          Retourner sur la page d'accueil
        </Link>
    </main>
  );
}

export default Error;