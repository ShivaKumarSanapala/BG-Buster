import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import HomePage from "./pages/HomePage/HomePage";
// import LoginForm from "./pages/Login/LoginForm";
import ImageUpload from "./pages/Editor/ImageUpload";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthRouting from "./components/authRouting";

function App() {
  return (
    <div>
      <ToastContainer />
      <TopBar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/upload" exact element={<ImageUpload />} />
        <Route path="/auth/*" exact element={<AuthRouting />} />
      </Routes>
    </div>
  );
}

export default App;
