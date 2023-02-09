// Import react router dom method
import { NavLink } from "react-router-dom";
// Import assets
import karl from '../../assets/images/karl.webp';
import cecilia from '../../assets/images/cecilia.webp';
// Import css of Home.js
import './Home.css';

function Home() {

  let body = document.querySelector('body');
  body.classList.contains('no--scroll') && body.classList.remove('no--scroll');

  return (
    <section className="l-container--md">
      <div className="users-heading text--center">
        <h1 className="title--xl">Bienvenue sur <span className="text--secondary">SportSee</span></h1>
      </div>
      <div className="users">
        <div>
          <NavLink to='user/12'>
            <div className="users__pic mb--xs">
              <img src={karl} alt="Profil de l'utilisateur" />
            </div>
            <p className="text--center title--sm text--primary">Je suis Karl</p> 
          </NavLink>
        </div>
        <div>
          <NavLink to="user/18"> 
            <div className="users__pic">
              <img src={cecilia} alt="Profil de l'utilisateur" />
            </div>
            <p className="text--center title--sm text--primary">Je suis Cecilia</p>
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default Home;
