import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ConnectedUsersPage from './ConnectedUsersPage';
import './App.css';
import './styles.css';
// import Demo from './Demo';
import logo from './images/sight.png'; 

function App() {
const myImageStyle = {  width: '500px', height: '130px' };

  return (
    <div >
<img style={myImageStyle} src={logo} alt="" />       
 <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user" element={<ConnectedUsersPage/>}/>
        {/* <Route path="/demo" element={<Demo/>}/> */}

      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
