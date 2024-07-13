import Logo from '../assets/BannierApropos.png'
import '../utils/styles/bannier.css'
import Collapse from '../components/Collapse'


function Apropos() {
  return (
    <main> 
        <div className="banner">
            <img src={Logo} alt="Bannier A propos" />
        </div>    
        <Collapse />    
    </main>
  );
}

export default Apropos;