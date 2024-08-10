import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home.jsx';
import UserListing from './pages/UserListing.jsx';
import PostListing from './pages/PostListing.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/userlisting" element={<UserListing />} />
          <Route path="/postlisting" element={<PostListing />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;