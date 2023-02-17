
//Import hook of react and react-router-dom
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Import my function to get data
import { getData } from '../../utils/getData';

// Import all Elements of recharts to manage my graph
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

// Import specific css
import './PolarCharts.css';

/***
 * Render a Polar Charts of this user performances
 * @return {JSX}
 * @author Dylan
 * @version 1.0
 */

function PolarCharts() {
  // get USER_PERFORMANCE data
  // Create my state
  const [data, setData] = useState([]);
  // Get id of my user with useParams. useParams get id in my url
  const { id } = useParams();

  // useEffect to call getData function and get my data
  useEffect(() => {
    const dataAsk = async () => {
      const requestData = await getData("USER_PERFORMANCE", id);
      let essentialDatas = requestData.data.data;
      essentialDatas.map((data) => {
        // For each data, if kind key egal to an number, give a name match to specify sector
        switch (data.kind) {
          // If kind is egal to 1, give name 'Cardio' at this type
          case 1:
            return data.kind = 'Cardio';
          // If kind is egal to 2, give name 'Énergie' at this type
          case 2:
            return data.kind = 'Énergie';
          // If kind is egal to 3, give name 'Endurance' at this type
          case 3:
            return data.kind = 'Endurance';
          case 4:
          // If kind is egal to 4, give name 'Force' at this type
            return data.kind = 'Force';
          // If kind is egal to 5, give name 'Vitesse' at this type
          case 5:
            return data.kind = 'Vitesse';
          // If kind is egal to 6, give name 'Intensité' at this type
          case 6:
            return data.kind = 'Intensité';
          default :
            return data;
        }
      })
      requestData ? setData(essentialDatas) : console.log("error")
    };
    dataAsk();

  }, [id]);

  // If user I doesn't have data return null
  if (data.length === 0) {
    return null;
  }

  return (
    <div className='graph-polar br--xs'>
      <ResponsiveContainer width="100%" height='100%'>
        <RadarChart cx="50%" cy="50%" data={data}>
          <PolarGrid stroke='#fff' />
          <PolarAngleAxis dataKey='kind'/>
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PolarCharts
