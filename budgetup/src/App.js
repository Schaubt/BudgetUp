import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Settings from './pages/Settings.js';
import Home from './pages/Home.js'
import Sidebar from './components/sideBar.js'
import Dashboard from './pages/Finance_Dashboard.js'
<link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
function App() {
  return (
    <>
    <Router>
      <Fragment>
      <Routes className="flex">
      <Route path="/" element={<Home />} />
      <Route path="/sidebar" element={<Sidebar />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} />
      </Routes>
      </Fragment>
    </Router>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
