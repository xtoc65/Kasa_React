// Importation du composant Bannier pour l'affichage de la bannière
import Bannier from '../components/Bannier';
// Importation du composant Cards pour afficher la liste des logements
import Cards from '../components/Cards';

function Home({logements}) {    
  return (
    <main>  
      {/* Affichage de la bannière en haut de la page d'accueil */}
      <Bannier />
      {/* Affichage des cartes de logements passées en tant que props */}
      <Cards logements={logements}/>
    </main>
  );
}

export default Home;