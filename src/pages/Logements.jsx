import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import flecheHaut from '../assets/fleche_haut.png'
import flecheBas from '../assets/fleche_bas.png'
import flecheDroite from '../assets/fleche_droite.png'
import flecheGauche from '../assets/fleche_gauche.png'
import starFull from "../assets/etoilePleine.png"
import starEmpty from '../assets/etoileVide.png'
import '../assets/styles/collapse.css'
import "../assets/styles/logement.css"

function Logements() {
  // État pour suivre l'index de la section de détails (Description/Équipement) qui est actuellement déployée
  const [activeIndex, setActiveIndex] = useState(null);
  // État pour stocker les données du logement sélectionné
  const [logement, setLogement] = useState(null);
  // État pour suivre l'index de l'image actuelle dans le carrousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Utilisation de `useParams` pour obtenir l'ID du logement à partir de l'URL
  const { id } = useParams();

   // pour basculer l'affichage des sections Description et Équipement
  const toggleCollapse = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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

  useEffect(() => {
    fetch('/data/logements.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedLogement = data.find((item) => item.id === id);
        setLogement(selectedLogement);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des logements :', error);
      });
  }, [id]);

  if (!logement) {
    return <div>Chargement...</div>; // État de chargement ou un message approprié
  }

  return (
    <main>

      <div className="logement">
        {/*Vérifie si la propriété 'pictures' de l'objet 'logement' existe et contient au moins une image */}
        {logement.pictures && logement.pictures.length > 0 && (
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
        )}
        <div className='info'>
          <div className="info_detail">
            <div className='localisation'>
              <h1>{logement.title}</h1>
              <p>{logement.location}</p>  
            </div>
            <div className="tags">
              {logement.tags.map((tag, index) => (
                <p key={index}>{tag}</p>
              ))}
            </div>
          </div>
          <div className='note'>
            <div className='host'>
              <p>{logement.host.name}</p>
              <img src={logement.host.picture} alt="Hôte" />  
            </div>
            {/* Vérification si la note (`rating`) est disponible */}
            {logement.rating && (
              <div className="rating">
                {/* Boucle pour afficher les étoiles en fonction de la note */}
                {Array.from({ length: 5 }).map((_, index) => (
                  <img
                    key={index}
                    src={index < logement.rating ? starFull : starEmpty}
                    alt={index < logement.rating ? "Étoile pleine" : "Étoile vide"}
                    className="star"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        
        
        <div className="detail">
          {/* Section pour la Description */}
          <div className="collapse-container">        
            <div className="collapse-section">
              <div className="collapsible" onClick={() => toggleCollapse(0)}>
                <span>Description</span>
                <span className="arrow">
                  {activeIndex === 0 ? <img src={flecheBas} alt="Flèche bas" /> : <img src={flecheHaut} alt="Flèche haut" />}
                </span>
              </div>
              <div className={`content ${activeIndex === 0 ? "active" : ""}`}>
                <p className="description">{logement.description}</p>
              </div>
            </div>
          </div>

          {/* Section pour les Équipements */}
          <div className="collapse-container">        
            <div className="collapse-section">
              <div className="collapsible" onClick={() => toggleCollapse(1)}>
                <span>Équipement</span>
                <span className="arrow">
                  {activeIndex === 1 ? <img src={flecheBas} alt="Flèche bas" /> : <img src={flecheHaut} alt="Flèche haut" />}
                </span>
              </div>
              <div className={`content ${activeIndex === 1 ? "active" : ""}`}>
                {logement.equipments.map((equipement, index) => (
                  <p className="description_equipement" key={index}>{equipement}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Logements