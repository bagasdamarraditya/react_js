import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages";
import Team from "./Pages/team";
import Contact from "./Pages/contacts";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
