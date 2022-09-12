import React from "react";
import {
  Route, Routes
} from "react-router-dom";
import './App.css';
import OffcanvasExample from './components/Navbar';
import About from './pages/About';
import Error from './pages/Error';
import Experience from "./pages/Experience";
import Home from './pages/Home';
import Study from "./pages/Study";

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
