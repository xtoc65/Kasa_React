import Logo from '../assets/LogoFooter.png'
import '../assets/styles/footer.css'

function Header() {
    return (
      <footer>
        <div>
            <img src={Logo} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    )
  }
  
  export default Header