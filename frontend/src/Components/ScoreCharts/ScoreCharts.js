// Import all Elements of recharts to manage my graph
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Import Proptypes to check props type
import PropTypes from 'prop-types';

// Import specific css
import './ScoreCharts.css';

/** Render Circle Chart of this user score
 * @param {number} score this score show if user has complete his objectif or not
 * @return {JSX} 
 * @author Dylan
 * @version 1.0
 */

function ScoreCharts({score}) {

  const todayScore = [{ value: score * 2 }, { value: 1}];
  return (
    <div className='graph-score t--grey br--xs'>
      <p className='suptitle--lg ml--md'>Score</p>
      <div className="score-info">
        <span>{score * 100}%</span>
        <p className='mx--auto'>de votre objectif</p>
      </div>
      <ResponsiveContainer width='100%' height='100%'>
        <PieChart>
          <Pie
            data={todayScore}
            innerRadius={70}
            outerRadius={80}
            fill="#8884d8"
            startAngle={90}
            endAngle={450}
            dataKey="value"
          >
            
            {todayScore.map((entry, index) =>
                index === 0 ? (
                  <Cell key={`cell-${index}`} cornerRadius={10} fill="#FF0101" />
                ) : (
                  <Cell key={`cell-${index}`} fill="#ffffff" />
                )
              )}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ScoreCharts;

ScoreCharts.propTypes = {
  score: PropTypes.number
}
