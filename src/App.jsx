import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import StudentPage from "./pages/StudentPage";
import TeacherPage from "./pages/TeacherPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Modules from "./components/Modules";
import CreateTeacherPage from "./pages/CreateTeacherPage";
import UpdateTeacherPage from "./pages/UpdateTeacherPage";
import PuzzleGame from "./components/PuzzleGame";
import QuizGame from "./components/QuizGame";
import ImageUploader from "./components/ImageUploader";

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
            <Route path="/teacher/:module" element={<TeacherPage />} />
            <Route path="/create/:module" element={<CreateTeacherPage />} />
            <Route path="/update/:id" element={<UpdateTeacherPage />} />
            <Route path="/modules/:type" element={<Modules />} />
            <Route path="/puzzle" element={<PuzzleGame />} />
            <Route path="/quiz" element={<QuizGame />} />
            <Route path="/imgupload" element={<ImageUploader />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
