import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import StudentPage from "./pages/StudentPage";
import TeacherPage from "./pages/TeacherPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Modules from "./components/Modules";

function App() {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <div className="routes-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="/student/:module" element={<StudentPage />} />
            <Route path="/teacher" element={<TeacherPage />} />
            <Route path="/modules/:type" element={<Modules />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
