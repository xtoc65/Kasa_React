// Importation de l'image du logo du pied de page
import Logo from '../assets/LogoFooter.png';
// Importation du fichier CSS pour le style du pied de page
import '../assets/styles/footer.css';

function Footer() {
  return (
    // Conteneur principal du pied de page
    <footer>
      <div>
        {/* Affichage du logo avec une description alternative pour l'accessibilité */}
        <img src={Logo} alt="Logo Kasa" />
        {/* Texte des droits d'auteur */}
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;