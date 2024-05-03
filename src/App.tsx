import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Landing from "./components/pages/Landing";
import Login from "./components/pages/Login/Login";
import Club from "./components/pages/Club/Club";
import Unsubscribe from "./components/pages/Unsubscribe/Unsubscribe";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/club" element={<Club />} />
          <Route path="/cancel" element={<Unsubscribe />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
