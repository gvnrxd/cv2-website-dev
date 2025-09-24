import { useState } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import LandingLayout from "./layouts/landinglayout/Index.jsx";
import MainLayout from "./layouts/mainlayout/Index.jsx";
import Home from "./pages/home/Index.jsx";
import About from "./pages/about/Index.jsx";
import Error from "./pages/error/Index.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<LandingLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
        </Route>

        <Route path="about" element={<MainLayout />}>
          <Route index element={<About />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
