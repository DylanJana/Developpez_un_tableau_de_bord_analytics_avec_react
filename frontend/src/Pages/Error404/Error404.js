// Import specific css
import './Error404.css';

// Import components to use on home page
import Navbar from "../../Components/Navbar/Navbar";
import VerticalNav from "../../Components/VerticalNav/VerticalNav";


import { Link } from 'react-router-dom';

// Import assets img
import error from '../../assets/images/404error.webp'

/**
 * Render Error404 page
 * @returns {JSX}
 * @author Dylan
 * @version 1.0
 */

function Error404() {
  return (
    <main>
      <Navbar />
      <section className="l-container--full">
        <div className="vertical-nav-container">
          <VerticalNav />
        </div>
        <div className="error-container">
          <div className="flex align-items--center justify-content--center error-container__heading mb--lg">
            <Link to='/' className='text--center'>Retourner à&nbsp;l'accueil</Link>
            <h1 className='title--xl text--black text--center'>Oups ! <span className='text--secondary'>Error404</span></h1>
          </div>
          <div>
            <img src={error} alt="Page not found" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Error404;
