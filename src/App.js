import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Home from './widgets/Home.js';
import MyWorks from './widgets/MyWorks_local.js';
import Error from './widgets/Error.js';
import "./App.css";

function App() {
  return (
    <HashRouter >
      <div>
        
          <Routes>
            <Route path="/" Component={Home} exact />
            <Route path="/myWorks" Component={MyWorks} />
            <Route path="*" Component={Error} />
          </Routes>
        
      </div>
    </HashRouter>
  );
}

export default App;
