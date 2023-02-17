// Import propType
import PropTypes from 'prop-types';

// Import css specific
import './ToolTipActivity.css'
/** 
  Customize tootlip barCharts
  *@param {bool} active tooltip if active or not ?
  *@param {array} payload arrays who contains the tooltip content
  *@return {JSX}
  *@author Dylan
 * @version 1.0
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