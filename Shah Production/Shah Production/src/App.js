import "./App.css";
import NavBar from "./components/Pages/NavBar";
import { BrowserRouter as Router,  Route, Routes, } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import { Register } from "./components/Pages/regester";

function App() {
  return (
    <>
      <Router>
      
      <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
           
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        
      </Router>
  </>
  );
}

export default App;
