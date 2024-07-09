import React, { useState, useEffect } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Navbar from './components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'light');

  useEffect(() => {
    document.body.style.backgroundColor = mode === 'dark' ? '#181D1F' : 'white';
  }, [mode]);

  const notify = (message) => {
    toast.success(message);
  };

  const toggleMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('mode', newMode);
    document.body.style.backgroundColor = newMode === 'dark' ? '#181D1F' : 'white';
    notify(`${newMode.charAt(0).toUpperCase() + newMode.slice(1)} mode has been enabled!`);
  };

  return (
    <div>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <div className="container my-4">
          <Routes>
            <Route path="/" element={<Home mode={mode} />} />
            <Route path="/quiz/:subject" element={<Quiz mode={mode} />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer position="top-center" autoClose={1000} />
    </div>
  );
};

export default App;
