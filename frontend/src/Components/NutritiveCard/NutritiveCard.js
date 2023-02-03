// Import specific css
import './NutritiveCard.css';

function NutritiveCard({ mesure, icon, label }) {
  //classTheme add an color class
  let classTheme;
  switch (label) {
    // if label === 'Calories' his theme color is red
    case 'Calories':
      classTheme = 't--secondary';
      break
    // if label === 'Protéines' his theme color is blue
    case 'Protéines':
      classTheme = 't--tiers'
      break
    // if label === 'Glucides' his theme color is yellow
    case 'Glucides':
      classTheme = 't--quarts'
      break
    // if label === 'Lipides' his theme color is pink
    case 'Lipides':
      classTheme = 't--fifth'
      break
    // else this item has not theme color
    default:
      classTheme= ''
  }

  return (
    <>
      <div className='row-card flex align-items--center'>
        <div className={`card-box flex justify-content--center align-items--center ${classTheme}`}>
          <img src={icon} alt={label} />
        </div>
        <div>
          <p className='title--xs'>{mesure}</p>
          <p className="suptitle--md text--tiers">{label}</p>
        </div>
      </div>
    </>
  )
}

export default NutritiveCard;
