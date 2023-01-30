import Navbar from "../../Components/Navbar/Navbar";
import VerticalNav from "../../Components/VerticalNav/VerticalNav";
import Main from "../../Components/Main/Main";

function Profil() {
  return (
    <main>
      <Navbar />
      <section className="l-container--full">
        <VerticalNav />
        <Main />
      </section>
    </main>
  )
}

export default Profil;
