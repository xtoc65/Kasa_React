import '../utils/styles/cards.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Cards() {
    const [logements, setLogements] = useState([]) 

    useEffect(()=>{
        fetch("data/logements.json")
        .then((reponse => reponse.json()))
        .then((data => {
            setLogements(data)
        }))
    }, [logements])
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