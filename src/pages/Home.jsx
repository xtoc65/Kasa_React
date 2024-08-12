import { useEffect, useState } from 'react'
import Bannier from '../components/Bannier'
import Cards from '../components/Cards'

function Home() {  
  const [logements, setLogements] = useState([]) 

  useEffect(()=>{
    fetch("data/logements.json")
      .then((reponse => reponse.json()))
      .then((data => {
        setLogements(data)
      }))
  }, [])
  return (
    <main> 
        {/* {JSON.stringify(logements)} */}   
        <Bannier />
        <Cards logements={logements}/>
    </main>
  );
}

export default Home;