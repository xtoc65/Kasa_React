import {useFetch} from '../utils/hooks'
import Bannier from '../components/Bannier'
import Cards from '../components/Cards'

function Home() {  
  const logements = useFetch('/data/logements.json') 
  
  return (
    <main> 
        {/* {JSON.stringify(logements)} */}   
        <Bannier />
        <Cards logements={logements}/>
    </main>
  );
}

export default Home;