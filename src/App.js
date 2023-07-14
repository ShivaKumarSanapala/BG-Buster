import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar/TopBar';
import HomePage from './components/HomePage/HomePage';
import LoginForm from './components/Login/LoginForm';
import ImageUpload from './components/Editor/ImageUpload';

function App() {
  return (
    <div>
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