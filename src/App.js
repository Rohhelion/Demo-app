import { Routes, Route, Link } from "react-router-dom";
import Home from ".Home";
import Contact from ".Contact";
import Info from ".Info";
import "./App.css";
function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/info" element={<Info />}></Route>
      </Routes>
    </div>
  );
}
export default App;