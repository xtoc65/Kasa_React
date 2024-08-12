import Logo from '../assets/BannierApropos.png'
import Collapse from '../components/Collapse'
import '../utils/styles/bannier.css'


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