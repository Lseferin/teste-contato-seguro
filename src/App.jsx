import './App.css';
import Home from './Pages/Home/Home';
import React from 'react';
import { BrowserRouter as Router, Route,  BrowserRouter, Routes } from 'react-router-dom';
import RegisterCompany from './Pages/Registers/RegisterCompany';
import RegisterUser from './Pages/Registers/RegisterUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro-usuario" element={<RegisterUser />} />
        <Route path="/cadastro-empresas" element={<RegisterCompany />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
