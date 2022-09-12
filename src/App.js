import {
  Route, Routes
} from "react-router-dom";
import './App.css';
import OffcanvasExample from './components/Navbar';
import About from './pag/About';
import Error from './pag/Error';
import Experience from "./pag/Experience";
import Home from './pag/Home';
import Study from "./pag/Study";

function App() {
  return (
    <div>
      <OffcanvasExample />
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/study" element={<Study />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
