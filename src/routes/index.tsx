// import React from 'react'
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Subscriptions from '../pages/Subcriptions';
import Users from '../pages/Users';
import Perfil from '../pages/Perfil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

        <Route path="/" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
          } />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/subcriptions" element={<Subscriptions />} />
      <Route path="/about" element={<About />} />
      <Route path="/users" element={<Users />} />
      <Route path="/profile" element={<Perfil />} />
    </Routes>
  </Router>
);

export default AppRoutes;
