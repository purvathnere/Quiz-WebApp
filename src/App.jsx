import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Slideshow from "./components/Slideshow";
import FeatureBoxes from "./components/FeatureBoxes";
import Info from "./components/Info";
import ExamCategories from "./components/ExamCategories";




import About from "./components/About";
import Course from "./components/Course";
import Exams from "./components/Exams";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import HomePage from "./HomePage";
import QuizPageHome from "./components/QuizPage/QuizPageHome";
import Dashboard from "./components/QuizPage/DashBoard";

function App() {
  return (
    <>
      {/* Common Header */}
      <Header />

      <Routes>
        {/* ===== Home Page ===== */}
        <Route
          path="/"
          element={
            <>
              <Slideshow />
              <FeatureBoxes />
              <Info />
              <ExamCategories />
              
              <HomePage />
            </>
          }
        />

        {/* ===== Other Pages ===== */}
        <Route path="/QuizPage/*" element={<QuizPageHome />} />
        <Route path="/About" element={<About />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/Exams" element={<Exams />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/FeatureBoxes" element={<FeatureBoxes />} />
        <Route path="/dashboard/*" element={<Dashboard/>}/>
      </Routes>

      {/* Common Footer */}
      <Footer />
    </>
  );
}

export default App;


