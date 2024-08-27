import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../components/Carousel'
import Rating from '../components/Rating'
import Collapse from '../components/Collapse'
import "../assets/styles/logement.css"

function Logements({data}) {
  const [logement, setLogement] = useState(null);
  // Utilisation de `useParams` pour obtenir l'ID du logement à partir de l'URL
  const { id } = useParams();
  
  // Utilisation de `useEffect` pour mettre à jour `logement` uniquement quand `logements` ou `id` changent
  useEffect(() =>{
    if(data){ // Vérifie si les données sont disponibles
      const selectedLogement = data.find((item) => item.id === id);
      setLogement(selectedLogement);
    }
  },[data, id]); // Dépendances : déclenche l'effet quand `logements` ou `id` changent
  
  if (!logement) {
    return <div>Chargement...</div>; // État de chargement ou un message approprié
  }

  return (
    <main>
      <div className="logement">
        <Carousel logement={logement} />
        {/* <Carousel pictures={logement.pictures} title={logement.title} />        */}
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

export default Logements