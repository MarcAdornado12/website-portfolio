import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Home from './pages/Home';


function App() {
  return (
    <>
      <header className="navBar">
        <div className="navLeft">
          <Link to="/">

            <h1>MA</h1>

          </Link>
        </div>

        <div className="navRight">
        <a href="https://github.com/MarcAdornado" target="_blank">GitHub</a>

        <a href="https://www.linkedin.com/in/marc-denzyl-adornado-7655293b9/" target="_blank">LinkedIn</a>

        <p>marcadornado12@gmail.com</p>
      </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/aboutMe" element={<AboutMe />} />
        
        <Route path="/projects" element={<Projects />} />
      </Routes>


    </>
  );
}

export default App
