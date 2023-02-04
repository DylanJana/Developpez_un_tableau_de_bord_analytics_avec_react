// Import propType
import PropTypes from 'prop-types';

// Import css specific
import './ToolTipActivity.css'
/** 
  Customize tootlip barCharts
  *@param {bool} active
  *@param {array} payload
  *@return {JSX}
*/

function ToolTipActivity({active, payload}) {
  if(active) {
    return (
      <div className='tooltip'>
        <p className='mb--md suptitle'>{payload[0].value}kg</p>
        <p className='suptitle'>{payload[1].value}Kcal</p>
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