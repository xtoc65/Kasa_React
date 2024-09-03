import React from 'react';
import Carousel from '../components/Carousel'
import Rating from '../components/Rating'
import Collapse from '../components/Collapse'
import "../assets/styles/logement.css"

function DetailLogement({logement}) {
  
  if (!logement) {
    return <div>Chargement...</div>; // État de chargement ou un message approprié
  }

  return (
    <main>
      <div className="logement">
        <Carousel logement={logement} />
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
            <Rating logement={logement} />       
          </div>
        </div>
        {/* Affiche le logement unique */}
        <div className='detail'>
          <Collapse key={1} id={logement.id} title="Description" content={logement.description} /> 
          <Collapse key={2} id={logement.id} title="Équipement" items={logement.equipments} /> 
        </div>
      </div>
    </main>
  );
}

export default DetailLogement