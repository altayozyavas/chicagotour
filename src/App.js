import logo from "./logo.svg";
import "./App.css";
import Title from "./react-router/Title";
import PLACESList from "./react-router/PLACESList";
import Footer from "./react-router/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PLACESDetails from "./react-router/PLACESDetails";
import About from "./react-router/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Routes>
          <Route path="/" element={<PLACESList />} />
          <Route path="about" element={<About />} />
          <Route path="details/:id" element={<PLACESDetails/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
