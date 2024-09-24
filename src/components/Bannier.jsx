// Importation de l'image de la bannière
import Bannier from '../assets/BannierHeader.png';
// Importation du fichier CSS pour le style de la bannière
import '../assets/styles/bannier.css';

function BannierHeader() {
  return (
    // Conteneur principal de la bannière
    <div className="banner">
      {/* Affichage de l'image de la bannière avec une description alternative */}
      <img src={Bannier} alt="Bannière - forêt" />
      
      {/* Texte superposé sur la bannière */}
      <div className="banner_text">
        <h1 className="banner_text_p1">Chez vous, </h1>
        <h1>partout et ailleurs</h1>
      </div>
    </div>
  );
}

export default BannierHeader;