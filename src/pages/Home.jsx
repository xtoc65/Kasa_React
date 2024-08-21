import Bannier from '../components/Bannier'
import Cards from '../components/Cards'

function Home({logements}) {    
  return (
    <main>  
        <Bannier />
        <Cards logements={logements}/>
    </main>
  );
}

export default Home;