import { Routes,Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Head from "./components/Head";

function App() {
  return (
    <div>
      {/* <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </nav> */}

      
      <Head/>
    </div>
  );
}

export default App;
