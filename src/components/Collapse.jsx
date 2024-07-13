import '../utils/styles/collapse.css'

function Collapse() {
    return (
      <label>
        <input type="checkbox" />
        <div class="collapsible">Ouvrir la section</div>
        <div class="content">
            <p>Voici le contenu de la section collapsible. Vous pouvez y mettre tout ce que vous voulez.</p>
        </div>
      </label>
    )
  }
  
  export default Collapse