// Import propType
import PropTypes from 'prop-types';

// Import css specific
import './ToolTipSessions.css'
/** 
  Customize tootlip barCharts
  *@param {bool} active tooltip if active or not ?
  *@param {array} payload arrays who contains the tooltip content
  *@return {JSX}
  *@author Dylan
  *@version 1.0
*/

function ToolTipActivity({active, payload}) {
  if(active) {
    return (
      <div className='tooltip-sessions'>
        <span className='suptitle'>{payload?.[0].value} min</span>
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