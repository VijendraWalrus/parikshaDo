import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Topic from './pages/topic';
import Section from './pages/section';
import Sidebar from './components/Sidebar/sidebar';
import LoginPage from './pages/login';
import CreateClientPage from './pages/createClient';
import CreateExamPage from './pages/createExam';
import Category from './components/SelectCategory/SelectCategory';
import SubCategory from './components/SelectSubCategory/SelectSubCategory';
import CreateSubject from './components/CreateSubject/createsubject';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
   
    <Router>
      {isLoggedIn ? ( 
        <>
        <div className="app-container">
          <Sidebar />
          <div className="wrapper">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/master/createClient" element={<CreateClientPage />} />
            <Route path="/master/createExam" element={<CreateExamPage/>} />
            <Route path="/master/createTopic" element={<Topic />} />
            <Route path="/master/createSection" element={<Section />} />
            <Route path="/master/category" element={<Category/>} />
            <Route path="/master/subCategory" element={<SubCategory/>} />
            <Route path="/master/createSubject" element={<CreateSubject/>} />
          </Routes>
          </div>
          </div>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
