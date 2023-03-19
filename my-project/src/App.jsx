import React from "react";
import { Routes, Route } from "react-router-dom";

import ROUTES from "./constants/routes";

import Courses from "./pages/Courses";
import Course from "./pages/Course";

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.COURSES} element={<Courses />} />
      <Route path={ROUTES.COURSE} element={<Course />} />
    </Routes>
  );
};

export default App;
