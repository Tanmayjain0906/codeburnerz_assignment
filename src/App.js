import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import AcademicsPage from "./Pages/AcademicsPage";
import EventsPage from "./Pages/EventsPage";
import PlacementPage from "./Pages/PlacementPage";
import GalleryPage from "./Pages/GalleryPage";
import InfrastrucePage from "./Pages/InfrastrucePage";
import ResourcesPage from "./Pages/ResourcesPage";
import BlogsPage from "./Pages/BlogsPage";
import ContactUsPage from "./Pages/ContactUsPage";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/About" element={<AboutPage />}/>
        <Route path="/Academics" element={<AcademicsPage />}/>
        <Route path="/Events" element={<EventsPage />}/>
        <Route path="/Placements" element={<PlacementPage />}/>
        <Route path="/Gallery" element={<GalleryPage />}/>
        <Route path="/Infrastructure" element={<InfrastrucePage />}/>
        <Route path="/Resources" element={<ResourcesPage />}/>
        <Route path="/Blogs" element={<BlogsPage />}/>
        <Route path="/Contact" element={<ContactUsPage />}/>
      </Routes>
      
    </div>
  );
}

export default App;
