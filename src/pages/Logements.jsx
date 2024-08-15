import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import flecheHaut from '../assets/fleche_haut.png'
import flecheBas from '../assets/fleche_bas.png'
import '../utils/styles/collapse.css'
import "../utils/styles/logement.css"

function Logements() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [logement, setLogement] = useState(null);
  const { id } = useParams(); // Utilisation correcte de `useParams`

  const toggleCollapse = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
    <div className="logement">
      {logement.pictures && logement.pictures.length > 0 && (
        <img src={logement.pictures[0]} alt={logement.title} className="picture" />
      )}
      <div className="detail">
        <div className='localisation'>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>  
        </div>
        <div className='host'>
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt="Hôte" />  
        </div>
      </div>
      <div>
        <div className="tags">
          {logement.tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div>
        {logement.pating && <img src={logement.pating} alt="Évaluation" />}
      </div>     
      
      
      <div className="info">
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
  );
}

export default Logements