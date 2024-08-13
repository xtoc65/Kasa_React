import React, { useState } from "react";
import flecheHaut from '../assets/fleche_haut.png'
import flecheBas from '../assets/fleche_bas.png'
import '../utils/styles/collapse.css'

function Collapse() {
  const [activeIndex, setActiveIndex] = useState(null);

  const slides = [
    {
        title: "description",
        content: "Profitez du charme de la vie parisienne dans un magnifique appartement. A 3 minutes à pied du Canl Saint Martin, vous serez proche des transports, mais également de nombreux commerces. L'appartement est tout équipé, et possède également un parking pour ceux qui souhaitent se déplacer en voiture."
    },
    {
      title: "equipments",
      content: [
        "Parking",
        "Sèche Cheveux",
        "Machine à laver",
        "Wi-fi",
        "Cuisine équipée",
        "Télévision"
        ],
    }
  ];

  const toggleCollapse = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="collapse-container">
      {slides.map((slide, index) => (
        <div key={index} className="collapse-section">
          <div className="collapsible" onClick={() => toggleCollapse(index)}>
            <span>{slide.title}</span>
            <span className="arrow">
              {activeIndex === index ? <img src={flecheBas}></img> : <img src={flecheHaut}></img>}
            </span>
          </div>
          <div className={`content ${activeIndex === index ? "active" : ""}`}>
            <p>{slide.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collapse