// Import method of react and react-router-dom
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//Import getData to get my data
import { getData } from '../../utils/getData';
// Import Components
import HelloUser from '../HelloUser/HelloUser';
import NutritiveCard from '../NutritiveCard/NutritiveCard';
import Graphs from '../Graphs/Graphs';

// Import icons of NutritiveCard
import energy from '../../assets/svg/energy.svg';
import protein from '../../assets/svg/protein.svg';
import glucides from '../../assets/svg/glucides.svg';
import lipides from '../../assets/svg/lipides.svg';

// Import css
import './Main.css';
/***
 * Render a profil content of user
 * @return {JSX}
 */
function Main() {
  // Create my state
  const [data, setData] = useState([]);
  // Get id of my user with useParams. useParams get id in my url
  const {id} = useParams();

  // useEffect to call getData function and get my data
  useEffect(() => {
    const dataAsk = async () => {
      const requestData = await getData("USER_MAIN_DATA", id);
      requestData ? setData(requestData.data) : console.log("error")
    };
    dataAsk();
  },[id]);

  // If user I doesn't have data return null
  if(data.length === 0) {
    return null;
  }

  return (
    <section className='graphs-container'>
      <HelloUser name={data.userInfos.firstName} score={data.score} />
      <div className='graphs-grid-container flex justify-content--space-between'>
        <Graphs />
        <div className='row-cards'> 
          <NutritiveCard 
            mesure={`${data.keyData.calorieCount}kCal`}
            icon={energy}
            label={"Calories"}
            />
            <NutritiveCard 
            mesure={`${data.keyData.proteinCount}g`}
            icon={protein}
            label={"Protéines"}
            />
            <NutritiveCard 
            mesure={`${data.keyData.carbohydrateCount}g`}
            icon={glucides}
            label={"Glucides"}
            />
            <NutritiveCard 
            mesure={`${data.keyData.lipidCount}g`}
            icon={lipides}
            label={"Lipides"}
            />
        </div>
      </div>
    </section>
  )
}

export default Main;
