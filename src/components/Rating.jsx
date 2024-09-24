// Importation des images pour les étoiles pleines et vides
import starFull from "../assets/etoilePleine.png";
import starEmpty from '../assets/etoileVide.png';
// Importation du fichier CSS pour le style de l'évaluation
import "../assets/styles/logement.css";

function Rating({logement}){
    return(
        // Vérifie si le logement a une note avant d'afficher les étoiles
        logement.rating && (
            <div className="rating">
          {/* Boucle pour afficher les étoiles en fonction de la note */}
          {Array.from({ length: 5 }).map((_, index) => (
            <img
              key={index}
              // Choix de l'image en fonction de l'index et de la note
              src={index < logement.rating ? starFull : starEmpty}
              // Texte alternatif pour l'accessibilité
              alt={index < logement.rating ? "Étoile pleine" : "Étoile vide"}
              className="star"
            />
          ))}
        </div>
      )
    )
}

export default Rating