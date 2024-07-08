import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import FirstScreen from './components/FirstScreen/FirstScreen';
import Login from './components/Login/Login'; 
import MainPage from './components/MainPage/MainPage';

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<FirstScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </Router>

      /*<div>
        <MainPage/>
      </div>*/
    )
} 

export default App;

