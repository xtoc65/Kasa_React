import React, { useState } from "react";
import flecheHaut from '../assets/fleche_haut.png'
import flecheBas from '../assets/fleche_bas.png'
import '../assets/styles/collapse.css'

function Collapse({id, title, content, items}) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCollapse = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
      <div className="collapse-container">
        <div className="collapse-section">
          <div className="collapsible" onClick={() => toggleCollapse(id)}>
            <span>{title}</span>
            <span className="arrow">
                {activeIndex === id ? <img src={flecheBas} alt="Flèche bas" /> : <img src={flecheHaut} alt="Flèche haut" />}
              </span>
            </div>
            <div className={`content ${activeIndex === id ? "active" : ""}`}>
              <p className="description">{content}</p>
              <ul className="description_equipement">{items?.map(item => (<li>{item}</li>))}</ul>
            </div>
        </div>
      </div>
  );
}

export default Collapse;