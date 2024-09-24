import React, { useState } from 'react';
// Import des images des flèches pour la navigation du carrousel
import flecheDroite from '../assets/fleche_droite.png';
import flecheGauche from '../assets/fleche_gauche.png';
// Import du fichier CSS pour le style spécifique du carrousel
import "../assets/styles/logement.css";

function Carousel({logement}) {
    // État pour suivre l'index de l'image actuelle dans le carrousel
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // pour afficher l'image précédente dans le carrousel
    const imgPrecedente = () => {
      // Si l'utilisateur est sur la première image, on revient à la dernière image
      const isFirstSlide = currentImageIndex === 0;
      const newIndex = isFirstSlide ? logement.pictures.length - 1 : currentImageIndex - 1;
      // Mise à jour de l'index de l'image actuelle
      setCurrentImageIndex(newIndex);
    };

    // pour afficher l'image suivante dans le carrousel
    const imgSuivante = () => {
      // Si l'utilisateur est sur la dernière image, on retourne à la première
      const isLastSlide = currentImageIndex === logement.pictures.length - 1;
      const newIndex = isLastSlide ? 0 : currentImageIndex + 1;
      setCurrentImageIndex(newIndex);
    };
    return (
        // Vérifie si la propriété 'pictures' de l'objet 'logement' existe et contient au moins une image
        logement.pictures && logement.pictures.length > 0 && (
            <div className="carousel">
               {/* Bouton pour naviguer vers l'image précédente */}
              <button onClick={imgPrecedente} className="carousel-prev">
                <img src={flecheGauche} alt="Flèche gauche" className='fleche'/>
              </button>
              {/* Affichage de l'image actuelle selon l'index */}
              <img src={logement.pictures[currentImageIndex]} alt={logement.title} />
              {/* Bouton pour naviguer vers l'image suivante */}
              <button onClick={imgSuivante} className="carousel-next">
                <img src={flecheDroite} alt="Flèche droite" className='fleche'/>
              </button>
              {/* Affichage de l'index de l'image actuelle par rapport au total */}
              <div className="nmb-img">
                {currentImageIndex + 1} / {logement.pictures.length}
              </div>
            </div>
          )
    )
}

export default Carousel