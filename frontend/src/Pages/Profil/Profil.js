import Navbar from "../../Components/Navbar/Navbar";
import VerticalNav from "../../Components/VerticalNav/VerticalNav";
import Main from "../../Components/Main/Main";

// Import Specific css
import './Profil.css';

function Profil() {
  return (
    <main>
      <Navbar activeClass='Profil' />
      <section className="l-container--full">
        <div className="vertical-nav-container">
          <VerticalNav />
        </div>
        <Main />
      </section>
    </main>
  )
}

export default Profil;
