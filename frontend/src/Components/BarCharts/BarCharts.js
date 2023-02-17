//Import hook of react and react-router-dom
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Import my function to get data
import { getData } from '../../utils/getData';

// Import all Elements of recharts to manage my graph
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// Import specific ToolTip
import ToolTipActivity from '../ToolTipActivity/ToolTipActivity';

// Import specific css
import './BarCharts.css';

/**
 * This function display user activity like Bar Chart
 * @returns {JSX}
 */
function BarCharts() {
  // get USER_ACTIVITY data
   // Create my state
   const [data, setData] = useState([]);
   // Get id of my user with useParams. useParams get id in my url
   const {id} = useParams();
 
   // useEffect to call getData function and get my data
   useEffect(() => {
     const dataAsk = async () => {
       const requestData = await getData("USER_ACTIVITY", id);
       requestData ? setData(requestData.data) : console.log("error")
     };
     dataAsk();
   },[id]);
 
   // If user I doesn't have data return null
   if(data.length === 0) {
     return null;
   }

   // Change my format date to a number
   let dataSessionLength = data.sessions.length;
   for(let i = 0; i < dataSessionLength; i++) 
    {data.sessions[i].day = i + 1};

  return (
    <div className='t--grey br--xs graph-activity'>
      <div className="graph-activity__legend mb--xl">
        <h2 className='suptitle--lg text--quarts'>Activité quotidienne</h2>
        <div className='barcharts-legends flex'>
          <div className='barcharts-legends__item flex align-items--center'>
            <div className='barcharts-legends__item-dot dot--blue'></div>
            <p className='suptitle--md text--tiers'>Poids (kg)</p>
          </div>
          <div className='barcharts-legends__item flex align-items--center'>
            <div className='barcharts-legends__item-dot dot--red'></div>
            <p className='suptitle--md text--tiers'>Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>
      <ResponsiveContainer height={200}>
        <BarChart
          data={data.sessions}
          barGap={8}
        >
          <CartesianGrid vertical={false} strokeDasharray="1 1" />
          <XAxis dataKey="day" dy={16} tickLine={false} stroke='#DEDEDE' />
          <YAxis yAxisId="kilogram" dataKey="kilogram" orientation='right' dx={40} axisLine={false} tickLine={false} tickCount='4' type='number' domain={['dataMin - 2', 'dataMax + 1']}  />
          <YAxis yAxisId="calories" dataKey="calories" type="number" domain={['dataMin - 20', 'dataMax + 10']}  hide={true} />
          <Tooltip wrapperStyle={{ outline: 'none' }} content={<ToolTipActivity />} />
          <Bar yAxisId="kilogram" dataKey="kilogram" barSize={7} radius={[50, 50, 0, 0]} fill="#282D30" />
          <Bar yAxisId="calories" dataKey="calories" barSize={7} radius={[50, 50, 0, 0]} fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarCharts;
