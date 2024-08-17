import { NavLink } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import '../assets/styles/header.css'

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