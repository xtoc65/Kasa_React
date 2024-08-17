import React, { useState } from "react";
import flecheHaut from '../assets/fleche_haut.png'
import flecheBas from '../assets/fleche_bas.png'
import '../assets/styles/collapse.css'

function Collapse({slide}) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCollapse = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="collapse-container">
      <div key={slide.id} className="collapse-section">
        <div className="collapsible" onClick={() => toggleCollapse(slide.id)}>
          <span>{slide.title}</span>
          <span className="arrow">
              {activeIndex === slide.id ? <img src={flecheBas} alt="Flèche bas" /> : <img src={flecheHaut} alt="Flèche haut" />}
            </span>
          </div>
          <div className={`content ${activeIndex === slide.id ? "active" : ""}`}>
            <p>{slide.content}</p>
          </div>
        </div>
      
    </div>
  );
}

export default Collapse;