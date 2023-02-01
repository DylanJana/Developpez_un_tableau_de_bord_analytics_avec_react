// Import method of react and react-router-dom
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//Import getData to get my data
import { getData } from '../../utils/getData';
// Import Components
import HelloUser from '../HelloUser/HelloUser';
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
  if(data?.length === 0) {
    return null;
  }

  let nameUser = data.userInfos.firstName;
  // Get scoreUser
  let scoreUser = data.score

  return (
    <section className='graphs-container'>
      <HelloUser name={nameUser} score={scoreUser} />
    </section>
  )
}

export default Main;
