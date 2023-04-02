
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
     requestData && setData(requestData)
    };
    dataAsk();

  }, [id]);

  // If user I doesn't have data return null
  if (data?.length === 0) {
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
