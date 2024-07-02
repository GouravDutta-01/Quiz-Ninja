import React from 'react';
import { Link } from 'react-router-dom';

const subjects = [
  { name: 'Database Management System', url: 'dbms' },
  { name: 'Operating System', url: 'os' },
];

const Home = ({ mode }) => {
  return (
    <div className="container my-4">
      <div className="row">
        {subjects.map((subject) => (
          <div className="col-md-6 mb-4" key={subject.url}>
            <Link to={`/quiz/${subject.url}`} style={{ textDecoration: 'none' }}>
              <div
                className={`card h-100 ${mode === 'dark' ? 'text-white' : 'text-dark'}`}
                style={{
                  backgroundColor: mode === 'dark' ? '#1e2a38' : '#f8f9fa',
                  transition: 'transform 0.2s',
                  cursor: 'pointer',
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <div className="card-body">
                  <h5 className="card-title">{subject.name}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
