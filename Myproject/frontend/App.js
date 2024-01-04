import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import ListEmployeeComponent from './components/ListEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import DeveloperSite from './components/DeveloperSite';

function App() {
  return (
    <Router>
      <div className="container">
        <HeaderComponent />
        <div className="container">
          <Routes> 
            <Route path="/" exact  element={<ListEmployeeComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/add-employee" element={<CreateEmployeeComponent/>} />
            <Route path="/update-employee/:id" element={<UpdateEmployeeComponent/>} />
            <Route path="/view-employee/:id" element={<ViewEmployeeComponent/>} />
            <Route path="/developersite"  element={<DeveloperSite/>} />

          </Routes>
        </div>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
