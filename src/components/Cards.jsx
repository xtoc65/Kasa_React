// Importation de 'Link' depuis 'react-router-dom' pour la navigation entre les pages
import { Link } from 'react-router-dom';
// Importation du fichier CSS pour le style des cartes
import '../assets/styles/cards.css';

function Cards({ logements }) {
  return (
    // Conteneur principal pour afficher toutes les cartes des logements
    <section className="cards">
      {/* Boucle sur chaque logement pour créer une carte */}
      {logements.map((logement) => (
        // Chaque article représente une carte unique avec un identifiant clé
        <article key={logement.id}>
          {/* Lien vers la page de détail du logement basé sur son ID */}
          <Link to={`/logement/${logement.id}`}>
            {/* Affichage de la première image du logement */}
            <img src={logement.pictures[0]} alt={logement.title} />
            {/* Affichage du titre du logement */}
            <h2>{logement.title}</h2>
          </Link>
        </article>
      ))}
    </section>
  );
}

export default Cards;