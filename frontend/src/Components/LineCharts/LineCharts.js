//Import hook of react and react-router-dom
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Import my function to get data
import { getData } from '../../utils/getData';

// Import all Elements of recharts to manage my graph
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Import Tooltip template
import ToolTipSessions from '../ToolTipSessions/ToolTipSessions.js'
// Import specif css
import './LineCharts.css';

/***
 * Render a average session like line graph
 * @return {JSX}
 * @author Dylan
 * @version 1.0
 */

function LineCharts() {
  // get USER_AVERAGE_SESSIONS data
   // Create my state
   const [data, setData] = useState([]);
   // Get id of my user with useParams. useParams get id in my url
   const {id} = useParams();
 
   // useEffect to call getData function and get my data
   useEffect(() => {
     const dataAsk = async () => {
       const requestData = await getData("USER_AVERAGE_SESSIONS", id);
       requestData ? setData(requestData.data) : console.log("error")
     };
     dataAsk();
   },[id]);

   data?.sessions?.map((dataItem) => {
    switch(dataItem.day) {
      case 1:
        return dataItem.day = 'L';
      case 2:
        return dataItem.day = 'M';
      case 3:
        return dataItem.day = 'M';
      case 4:
        return dataItem.day = 'J';
      case 5:
        return dataItem.day = 'V';
      case 6:
        return dataItem.day = 'S';
      case 7:
        return dataItem.day = 'D';
      default:
        return data.sessions
    }
   })
  
   // Get position of my cursor in my element and create shadow box
   const backgroundChange = (e) => {
    // Select elemnt with has class shadow-box
    let shadowBox = document.querySelector('.shadow-box');
    // Select my Sessions Graph
    let graphSessions = document.querySelector('.graph-sessions');
    // Get Sessions Graphh width
    let graphSessionsWidth = graphSessions.offsetWidth;
    // I calculate the difference between my hover area and the left edge of the graph
    const xPosition = e.pageX - e.currentTarget.offsetLeft;
    // I calculate total width of my box shadow
    let widthBoxHover = graphSessionsWidth - xPosition - 35;
    // I apply the good width on my box shadow
    shadowBox.style.width = `${widthBoxHover}px`;
   }

  return (
    <div 
    className='graph-sessions br--xs'
    onMouseMove={backgroundChange}
    >
      <p className='ml--sm title--xs-med'>Durée moyenne des session</p>
      <ResponsiveContainer 
        width='100%' 
        height='100%'
        className='graph-sessions__container'>
        <LineChart
          data={data.sessions}
        >
          <defs>
            <linearGradient id="gradientColor">
              <stop offset="40%" stopColor="rgba(255, 255, 255, 0.4)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" axisLine={false} tickLine={false} dy={10} />
          <Tooltip  wrapperStyle={{ outline: 'none' }} content={<ToolTipSessions />} />
          <Line 
          type="monotone" 
          dataKey="sessionLength" 
          stroke="url(#gradientColor)"
          strokeWidth={2} 
          dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="shadow-box"></div>
    </div>
  )
}

export default LineCharts;
