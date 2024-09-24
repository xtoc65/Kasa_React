import React from 'react';
import Carousel from '../components/Carousel'; // Composant pour le carrousel d'images
import Rating from '../components/Rating'; // Composant pour afficher la note
import Collapse from '../components/Collapse'; // Composant pour les sections repliables
import "../assets/styles/logement.css"; // Fichier CSS pour le style de la page

function DetailLogement({logement}) {
  
  // Vérification si les données du logement sont disponibles
  if (!logement) {
    return <div>Chargement...</div>; // Affichage d'un message de chargement si le logement n'est pas encore chargé
  }

  return (
    <main>
      <div className="logement">
        {/* Affichage du carrousel d'images du logement */}
        <Carousel logement={logement} />
        <div className='info'>
          <div className="info_detail">
            {/* Affichage du titre et de la localisation du logement */}
            <div className='localisation'>
              <h1>{logement.title}</h1>
              <p>{logement.location}</p>  
            </div>
            {/* Affichage des tags associés au logement */}
            <div className="tags">
              {logement.tags.map((tag, index) => (
                <p key={index}>{tag}</p>
              ))}
            </div>
          </div>
          <div className='note'>
            {/* Affichage du nom de l'hôte et de son image */}
            <div className='host'>
              <p>{logement.host.name}</p>
              <img src={logement.host.picture} alt="Hôte" />  
            </div>
             {/* Affichage de la note du logement */}
            <Rating logement={logement} />       
          </div>
        </div>
        {/* Affichage des détails supplémentaires du logement */}
        <div className='detail'>
          <Collapse key={1} id={logement.id} title="Description" content={logement.description} /> 
          <Collapse key={2} id={logement.id} title="Équipement" items={logement.equipments} /> 
        </div>
      </div>
    </main>
  );
}

export default DetailLogement