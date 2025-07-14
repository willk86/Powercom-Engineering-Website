import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Etudes } from "./pages/Etudes";
import { Controle } from "./pages/Controle";
import { References } from "./pages/References";
import { Galerie } from "./pages/Galerie";
import { Contact } from "./pages/Contact";
import { FaisabiliteAPS } from "./pages/FaisabiliteAPS";
import { Execution } from "./pages/Execution";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation children={undefined} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/etudes" element={<Etudes />} />
        <Route path="/controle" element={<Controle />} />
        <Route path="/references" element={<References />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faisabilite" element={<FaisabiliteAPS />} />
        <Route path="/execution" element={<Execution />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
