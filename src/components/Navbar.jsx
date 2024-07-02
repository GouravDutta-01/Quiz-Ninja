import React from "react";
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar(props) {
  return (
    <nav className={`navbar sticky-top navbar-expand-lg bg-${props.mode === 'light' ? 'light' : 'dark'} navbar-${props.mode === 'light' ? 'light' : 'dark'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <span className="fw-bold">
            <span style={{ color: '#4285f4' }}>Q</span>
            <span style={{ color: '#ea4335' }}>u</span>
            <span style={{ color: '#fbbc05' }}>i</span>
            <span style={{ color: '#34a853' }}>z</span>Ninja
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" target="_blank" rel="noreferrer" href="https://github.com/GouravDutta-01">
                View Github
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <span className={`text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ cursor: 'pointer', fontSize: '1.5rem' }} onClick={props.toggleMode}>
              {props.mode === 'light' ? <FaMoon /> : <FaSun />}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
