import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Ausstattung from "./components/sections/Ausstattung";
import Preise from "./components/sections/Preise";
import Galerie from "./components/sections/Galerie";
import Video from "./components/sections/Video";
import Kontakt from "./components/sections/Kontakt";

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <About />
      <Ausstattung />
      <Preise />
      <Galerie />
      <Video />
      <Kontakt />
      <Footer />
    </div>
  );
}

export default App;
