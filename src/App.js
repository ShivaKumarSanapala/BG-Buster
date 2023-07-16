import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import HomePage from "./pages/HomePage/HomePage";
import LoginForm from "./pages/Login/LoginForm";
import ImageUpload from "./pages/Editor/ImageUpload";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer />
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/upload" element={<ImageUpload />} />
      </Routes>
    </div>
  );
}

export default App;
