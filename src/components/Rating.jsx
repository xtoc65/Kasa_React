import starFull from "../assets/etoilePleine.png"
import starEmpty from '../assets/etoileVide.png'
import "../assets/styles/logement.css"

function Rating({logement}){
    return(
        logement.rating && (
            <div className="rating">
          {/* Boucle pour afficher les étoiles en fonction de la note */}
          {Array.from({ length: 5 }).map((_, index) => (
            <img
              key={index}
              src={index < logement.rating ? starFull : starEmpty}
              alt={index < logement.rating ? "Étoile pleine" : "Étoile vide"}
              className="star"
            />
          ))}
        </div>
      )
    )
}

export default Rating