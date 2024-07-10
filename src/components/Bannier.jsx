import Bannier from '../assets/BannierHeader.png'
import '../utils/styles/bannier.css'

function BannierHeader() {
  return (
    <div className="banner">
      <img src={Bannier} alt="Bannière - forêt" />
      <div className="banner_text">
        <h1 className="banner_text_p1">Chez vous, </h1>
        <h1>partout et ailleurs</h1>
      </div>
    </div>
  )
}

export default BannierHeader