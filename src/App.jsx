import { Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimonialPage from "./pages/TestimonialPage";
import TermCondPage from "./pages/TermCondPage";
import FaQPage from "./pages/FaQPage";

// Components
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return <div>
    <NavbarComponent/>
    <Routes>
      <Route path="/" Component={HomePage}/>
      <Route path="/kelas" Component={KelasPage}/>
      <Route path="/testimonial" Component={TestimonialPage}/>
      <Route path="/faq" Component={FaQPage}/>
      <Route path="/termscond" Component={TermCondPage}/>
    </Routes>
    <FooterComponent/>
  </div>
}

export default App
