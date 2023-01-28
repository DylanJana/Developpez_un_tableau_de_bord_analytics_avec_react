import { NavLink } from "react-router-dom";

// Import logo of my assets
import logo from '../../assets/svg/logo.svg';

// Import css
import './Navbar.css';

function Navbar() {
  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/">
          <img src={logo} alt="Logo de SportSee" />
        </NavLink>
        <nav className="nav">
          <ul className="nav__list">
            <li>
              <NavLink className={({isActive}) => isActive ? 'active title--sm' : 'title--sm text--white'} to='/'>
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive ? 'active title--sm' : 'title--sm text--white'} to='#'>
                Profil
              </NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive ? 'active title--sm' : 'title--sm text--white'} to='/comming-soon'>
                Réglage
              </NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive ? 'active title--sm' : 'title--sm text--white'} to='/comming-soon'>
                Communauté
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;
