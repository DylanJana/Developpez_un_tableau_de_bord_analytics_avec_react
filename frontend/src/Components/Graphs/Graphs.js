// Imports differents graphs
import BarCharts from '../BarCharts/BarCharts';
import LineCharts from '../LineCharts/LineCharts';
// Import specific css
import './Graphs.css';

function Graphs() {
  return (
    <div className="graphs-grid flex">
      <BarCharts />
      <div className='graphs-grid__row flex'>
        <div className='br--xs graph--tiers'>
          <LineCharts />
        </div>
        <div className='br--xs graph--tiers'>Graph 3</div>
        <div className='t--grey br--xs graph--tiers'>Graph 4</div>
      </div>
    </div>
  )
}

export default Graphs;
