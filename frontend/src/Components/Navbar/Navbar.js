// Import method of react
import {useState, useEffect} from 'react';
import { NavLink } from "react-router-dom";

// Import logo of my assets
import logo from '../../assets/svg/logo.svg';

// Import css
import './Navbar.css';

function Navbar({activeClass}) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [large, setLarge] = useState(window.innerWidth);

  // This function revert state of toggleMenu
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
    let body = document.querySelector('body');
    body.classList.contains('no--scroll') ? body.classList.remove('no--scroll') : body.classList.add('no--scroll');;
  }

  const calculScreenWidth = () => {
    setLarge(window.innerWidth);
  }

  // Create resize event on window object
  useEffect(() => {
    window.addEventListener('resize', calculScreenWidth);

  // Remove resize event on window object
    return () => {
      window.removeEventListener('resize', calculScreenWidth);
    }
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/">
          <img src={logo} alt="Logo de SportSee" />
        </NavLink>
        <nav className={toggleMenu ? 'nav nav--opened' : 'nav'}>
          <button
            onClick={toggleNav}
            className='nav__btn'>
              {toggleMenu ?
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" fill="currentColor"/>
              </svg> :
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='burger'>
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" fill="currentColor"/>
              </svg> 
              }
          </button>
          {(toggleMenu || large > 991) &&
            <ul className="nav__list">
              <li>
                <NavLink className={({isActive}) => isActive && activeClass === 'Home' ? 'active title--sm' : 'title--sm text--white'} to='/'>
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink className={({isActive}) => isActive && activeClass === 'Profil' ? 'active title--sm' : 'title--sm text--white'} to='#'>
                  Profil
                </NavLink>
              </li>
              <li>
                <p className='title--sm text--white'>
                  Réglage
                </p>
              </li>
              <li>
                <p className='title--sm text--white'>
                  Communauté
                </p>
              </li>
          </ul>
          }
        </nav>
      </div>
    </header>
  )
}

export default Navbar;
