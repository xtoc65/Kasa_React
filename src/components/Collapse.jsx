import React, { useState } from "react";
// Importation des flèches pour l'animation de l'ouverture/fermeture
import flecheHaut from '../assets/fleche_haut.png'
import flecheBas from '../assets/fleche_bas.png'
// Importation du fichier CSS pour le style du composant Collapse
import '../assets/styles/collapse.css'

function Collapse({ id, title, content, items }) {
  // État pour suivre quel collapse est actif
  const [activeIndex, setActiveIndex] = useState(null);

  // Fonction pour basculer l'état d'ouverture/fermeture du collapse
  const toggleCollapse = (index) => {
    // Si l'index actif est cliqué, on le ferme, sinon on l'ouvre
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-section">
        {/* Section cliquable pour ouvrir/fermer le collapse */}
        <div className="collapsible" onClick={() => toggleCollapse(id)}>
          <span>{title}</span>
          <span className="arrow">
            {/* Affiche la flèche vers le bas si actif, sinon vers le haut */}
            {activeIndex === id ? <img src={flecheBas} alt="Flèche bas" /> : <img src={flecheHaut} alt="Flèche haut" />}
          </span>
        </div>
        {/* Contenu qui s'affiche si le collapse est actif */}
        <div className={`content ${activeIndex === id ? "active" : ""}`}>
          <p className="description">{content}</p>
          <ul className="description_equipement">{items?.map((item, index) => (<li key={index}>{item}</li>))}</ul>
        </div>
      </div>
    </div>
  );
}

export default Collapse;