import logo from "./logo.svg";
import "./styles/App.css";
import Title from "./components/Title";
import PLACESList from "./components/PLACESList";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PLACESDetails from "./components/PLACESDetails";
import About from "./components/About";
import Author from "./components/Author";

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Routes>
          <Route path="/" element={<PLACESList />} />
          <Route path="about" element={<About />} />
          <Route path="details/:id" element={<PLACESDetails/>}/>
          <Route path="author" element={<Author/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
