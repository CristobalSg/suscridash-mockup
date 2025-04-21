// import React from 'react'
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Subscriptions from '../pages/Subcriptions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/subcriptions" element={<Subscriptions />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
);

export default AppRoutes;
