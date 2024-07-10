import Logo from '../assets/BannierApropos.png'
import '../utils/styles/bannier.css'


function Apropos() {
  return (
    <main> 
        <div className="banner">
            <img src={Logo} alt="Bannier A propos" />
        </div>        
    </main>
  );
}

export default Apropos;