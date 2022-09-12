import {
  Route, Routes
} from "react-router-dom";
import './App.css';
import OffcanvasExample from './components/Navbar';
import About from './page/About';
import Error from './page/Error';
import Experience from "./page/Experience";
import Home from './page/Home';
import Study from "./page/Study";

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
