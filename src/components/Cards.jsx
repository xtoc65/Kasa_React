import { Link } from 'react-router-dom';
import '../utils/styles/cards.css'

function Cards({logements}) {
    return (
        <section className="cards">
        {logements.map((logement) => (
          <article key={logement.id}>
            <Link to={`/logement/${logement.id}`}>
              <img src={logement.pictures[0]} alt={logement.title} />
              <h2>{logement.title}</h2>
            </Link>
          </article>
        ))}
      </section>
    )
  }
  
  export default Cards