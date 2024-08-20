import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../components/Carousel'
import Rating from '../components/Rating'
import CollapseLogement from '../components/CollapseLogement'
import "../assets/styles/logement.css"

function Logements() {
  const [logement, setLogement] = useState(null);
  // Utilisation de `useParams` pour obtenir l'ID du logement à partir de l'URL
  const { id } = useParams();

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
        <CollapseLogement logement={logement} /> 
      </div>
    </main>
  );
}

export default Logements