// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Terapeutas from "./pages/Terapeutas";
import TerapeutaDetalle from "./pages/TerapeutaDetalle";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />         
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/terapeutas" element={<Terapeutas />} />
        <Route path="/terapeutas/:slug" element={<TerapeutaDetalle />} />
      </Routes>
    </Router>
  );
}

export default App;
