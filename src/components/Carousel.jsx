import React, { useState } from 'react';
import flecheDroite from '../assets/fleche_droite.png'
import flecheGauche from '../assets/fleche_gauche.png'
import "../assets/styles/logement.css"

function Carousel({logement}) {
    // État pour suivre l'index de l'image actuelle dans le carrousel
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // pour afficher l'image précédente dans le carrousel
    const imgPrecedente = () => {
        const isFirstSlide = currentImageIndex === 0;
        const newIndex = isFirstSlide ? logement.pictures.length - 1 : currentImageIndex - 1;
        setCurrentImageIndex(newIndex);
    };

    // pour afficher l'image suivante dans le carrousel
    const imgSuivante = () => {
        const isLastSlide = currentImageIndex === logement.pictures.length - 1;
        const newIndex = isLastSlide ? 0 : currentImageIndex + 1;
        setCurrentImageIndex(newIndex);
    };
    return (
        // Vérifie si la propriété 'pictures' de l'objet 'logement' existe et contient au moins une image
        logement.pictures && logement.pictures.length > 0 && (
            <div className="carousel">
              <button onClick={imgPrecedente} className="carousel-prev">
                <img src={flecheGauche} alt="Flèche gauche" className='fleche'/>
              </button>
              <img src={logement.pictures[currentImageIndex]} alt={logement.title} />
              <button onClick={imgSuivante} className="carousel-next">
                <img src={flecheDroite} alt="Flèche droite" className='fleche'/>
              </button>
              <div className="nmb-img">
                {currentImageIndex + 1} / {logement.pictures.length}
              </div>
            </div>
          )
    )
}

export default Carousel