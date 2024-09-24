// Importation de NavLink depuis react-router-dom pour la navigation
import { NavLink } from 'react-router-dom';
// Importation de l'image du logo
import Logo from '../assets/Logo.png';
// Importation du fichier CSS pour le style de l'en-tête
import '../assets/styles/header.css';

function Header() {
    return (
      <header>
        <nav className="nav_container">
          <NavLink to="/">
            <img src={Logo} alt="Logo Kasa" />
          </NavLink>
          <div>
            <NavLink className="nav_link" to="/">
              Accueil
            </NavLink>
            <NavLink className="nav_link" to="/a-propos">
              À propos
            </NavLink>
          </div>
        </nav>
      </header>
    )
  }
  
  export default Header