// import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/App.css";
import Layout from "./components/layout/Layout";
import Course from "./pages/Course";
import Page404 from "./pages/Page404";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course/:id" element={<Course />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
