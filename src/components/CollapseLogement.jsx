import React, { useState } from "react";
import flecheHaut from '../assets/fleche_haut.png'
import flecheBas from '../assets/fleche_bas.png'
import '../assets/styles/collapse.css'
import "../assets/styles/logement.css"


function CollapseLogement({logement}) {
     // État pour suivre l'index de la section de détails (Description/Équipement) qui est actuellement déployée
    const [activeIndex, setActiveIndex] = useState(null);
  
    // pour basculer l'affichage des sections Description et Équipement
    const toggleCollapse = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return(
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

)}

export default CollapseLogement