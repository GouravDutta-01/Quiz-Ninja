
import React, { useState } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Navbar from './components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [mode, setMode] = useState('light');

  const notify = (message) => {
    toast.success(message);
  };

  const toggleMode = () => {
    if (mode !== 'dark') {
      setMode('dark');
      document.body.style.backgroundColor = '#181D1F';
      notify('Dark mode has been enabled!');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      notify('Light mode has been enabled!');
    }
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
