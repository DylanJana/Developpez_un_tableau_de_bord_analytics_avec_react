// Import propType
import PropTypes from 'prop-types';

// Import css specific
import './ToolTipSessions.css'
/** 
  Customize tootlip barCharts
  *@param {bool} active
  *@param {array} payload
  *@return {JSX}
*/

function ToolTipActivity({active, payload}) {
  if(active) {
    return (
      <div className='tooltip-sessions'>
        <span className='suptitle'>{payload[0].value} min</span>
      </div>
    ) 
  }
  return null
}

export default ToolTipActivity;

ToolTipActivity.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array
}