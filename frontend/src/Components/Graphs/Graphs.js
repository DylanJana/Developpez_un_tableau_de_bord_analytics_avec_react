// Imports differents graphs
import BarCharts from '../BarCharts/BarCharts';
import LineCharts from '../LineCharts/LineCharts';
import PolarCharts from '../PolarCharts/PolarCharts';
import ScoreCharts from '../ScoreCharts/ScoreCharts';

// Import Proptypes to check props type
import PropTypes from 'prop-types';

// Import specific css
import './Graphs.css';

/***
 * Render a graph container
 * @param {number} this score show if user has complete his objectif or not
 * @return {JSX}
 * @author Dylan
 * @version 1.0
 */

function Graphs({score}) {
  return (
    <div className="graphs-grid flex">
      <BarCharts />
      <div className='graphs-grid__row flex'>
        <div className='graph--tiers'>
          <LineCharts />
        </div>
        <div className='graph--tiers'>
          <PolarCharts />
        </div>
        <div className='graph--tiers'>
          <ScoreCharts score={score} />
        </div>
      </div>
    </div>
  )
}

export default Graphs;

Graphs.propTypes = {
  score: PropTypes.number
}
