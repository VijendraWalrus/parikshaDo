import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Section from './pages/section';
import Sidebar from './components/Sidebar/sidebar';
import LoginPage from './pages/login';
import CreateClientPage from './pages/createClient';
import CreateExamPage from './pages/createExam';
import Category from './components/SelectCategory/SelectCategory';
import SubCategory from './components/SelectSubCategory/SelectSubCategory';
import CreateSubject from './components/CreateSubject/createsubject';
import CreateTopic from './components/CreateTopic/CreateTopic';
import Papers from './pages/papers';
import Question from './components/CreateQuestions/Question';
import QuestionView from './components/CreateQuestions/ViewQuestions';
import ExamLogin from './components/testseries/examlogin';
import InstructionMain from './components/testseries/instruction';
import InstNext from './components/testseries/insNext';
import TestSeriesMain from './components/testseries/main';
import Candidate from './components/Candidate/Candidate';
import Paper from './components/Paper/Paper';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
   
    <Router>
      {/* {isLoggedIn ? (  */}
        <>
        <div className="app-container">
          <Sidebar />
          <div className="wrapper">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/master/createClient" element={<CreateClientPage />} />
            <Route path="/master/createExam" element={<CreateExamPage/>} />
            <Route path="/master/createTopic" element={<CreateTopic/>} />
            <Route path="/master/createSection" element={<Section />} />
            <Route path="/master/category" element={<Category/>} />
            <Route path="/master/subCategory" element={<SubCategory/>} />
            <Route path="/master/createSubject" element={<CreateSubject/>} />
            <Route path="/master/paper" element={<Paper/>} />
            <Route path="/questions/create" element={<Question/>} />
            <Route path="/questions/view" element={<QuestionView/>} />
            <Route path="/Candidate" element={<Candidate/>} />

             {/* candidate */}
            
            <Route path="/Examlogin" element={<ExamLogin />}/>
            <Route path="/InstructionMain" element={<InstructionMain />}/>
            <Route path="/instNext" element={<InstNext />}/>
            <Route path="/TestSeries" element={<TestSeriesMain />}/>
          </Routes>
          </div>
          </div>
        </>
      {/* ) : ( */}
        <Routes>
          <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        </Routes>
      {/* )} */}
    </Router>
  );
};

export default App;
