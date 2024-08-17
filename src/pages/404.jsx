import { Link } from 'react-router-dom'
import Error404 from '../assets/404.png'
import '../assets/styles/error.css'

function Error() {
  return (
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