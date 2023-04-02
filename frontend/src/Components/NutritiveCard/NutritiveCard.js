// Import specific css
import './NutritiveCard.css';

// Import Proptypes to check props type
import PropTypes from 'prop-types';

/***
 * Render a horizontal navbar
 * @param {string} mesures matches element quantity 
 * @param {string} label matches element name
 * @return {JSX}
 * @author Dylan
 * @version 1.0
 */

function NutritiveCard({ mesure, icon, label }) {

  return (
    <div className='row-cards__column'>
      <div className='row-card t--grey flex align-items--center br--xs'>
        <div className={`card-box flex justify-content--center align-items--center ${label}`}>
          <img src={icon} alt={label} />
        </div>
        <div>
          <p className='title--xs'>{mesure}</p>
          <p className="suptitle--md text--tiers">{label}</p>
        </div>
      </div>
    </div>
  )
}

export default NutritiveCard;

NutritiveCard.propTypes = {
  mesure: PropTypes.string,
  icon: PropTypes.any,
  label: PropTypes.string,
}