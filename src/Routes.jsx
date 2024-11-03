import {  Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Question from "./pages/ProjectMath1";
import About from "./pages/About";
import Home from "./pages/Home";
import ProjectMath from "./pages/Project";
import InputPage from "./pages/InputPage";
// import ProfilePage from "./pages/ProfilePage";
import PageQuestionInput from "./pages/PageQuestionInput";
import NotFound from "./pages/NotFound";
import Edebiyat from "./pages/Edebiyat";
import Language from "./pages/LanguAge";
import Json from "./companents/DB";
import LoginPage from "./pages/Login";
import Create from "./pages/CreateAccount";

export default function Routing() {
  return (
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/img-input" element={<InputPage />} />
          <Route path="/project" element={<ProjectMath />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projectmath" element={<Question />} />
          {/* <Route path="/Profile" element={<ProfilePage />} /> */}
          <Route path="/inputpage" element={<PageQuestionInput />} />
          <Route path="/edebiyat" element={<Edebiyat />} />
          <Route path="/language" element={<Language />} />
          <Route path="/json" element={<Json />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create" element={<Create />} />
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
  );
}
//devam edilecek