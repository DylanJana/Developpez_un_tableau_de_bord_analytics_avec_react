import Navbar from "../../Components/Navbar/Navbar";
import VerticalNav from "../../Components/VerticalNav/VerticalNav";
import Graphs from "../../Components/Graphs/Graphs";

function Profil() {
  return (
    <main>
      <Navbar />
      <section className="l-container--full">
        <VerticalNav />
        <Graphs />
      </section>
    </main>
  )
}

export default Profil;
