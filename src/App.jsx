import Home from './components/Home';
import About from './aboutme';
import Services from './services'
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
import projects from './projects';
import Contact from "./contactme";
function App() {
 

  return (
    <>
      <Router>      
      <Routes>
          
          <Route path="/" Component={Home}/>
          <Route path="/about" Component={About}/>
          <Route path="/services" Component={Services}/>
          <Route path="/project" Component={projects}/>
          <Route path="/contact" Component={Contact}/>

          
        </Routes>
      </Router>
    </>
  )
}

export default App
