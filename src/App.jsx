import { Route, Routes } from "react-router-dom";
import ContactMe from "./views/ContactMe";
import CoverLetter from "./views/CoverLetter";
import Sidebar from "./views/partials/Sidebar";
import Intro from "./views/Intro";
import CurriculumVitaeCV from "./views/CurriculumVitaeCV";
import Portfolio from "./views/Portfolio";

function App() {
  return (
    <div className="App h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="bg-primary shadow-md w-full md:fixed md:top-0 md:left-0 md:h-screen md:w-[20%]">
        <Sidebar />
      </div>

      {/* Routes content */}
      <div className="flex-1 p-6 md:ml-[20%]">
        <Routes>
          <Route path="/*" element={<Intro />} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route path="/cover-letter" element={<CoverLetter />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/curriculum-vitae-cv" element={<CurriculumVitaeCV />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
