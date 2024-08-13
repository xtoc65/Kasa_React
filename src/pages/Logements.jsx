import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CollapseLogement from '../components/CollapseLogement';
import "../utils/styles/logement.css"

function Logements() {
  const { id } = useParams(window.location.href); // Récupère l'ID du logement à partir de l'URL
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    fetch('/data/logements.json')
      .then((reponse) => reponse.json())
      .then((data) => {
        const selectedLogement = data.find((item) => item.id === id);
        setLogement(selectedLogement);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des logements:', error);
      });
  }, [id]);

  if (!logement) {
    return <div>Chargement...</div>; // Afficher un message de chargement ou de gestion des erreurs
  }

  return (
    <div className="logement">
        <img src={logement.pictures[0]} alt={logement.title}  className="picture"/>
        <div className="detail">
            <div className='localisation'>
               <h1>{logement.title}</h1>
                <p>{logement.location}</p>  
            </div>
            <div className='host'>
                <p>{logement.host.name}</p>
                <img src={logement.host.picture}></img>  
            </div>
        </div>
        <div>
            <p className='tags'>{logement.tags}</p>
            <img scr={logement.pating}></img>
        </div>      
        <CollapseLogement />
    </div>
  );
}

export default Logements