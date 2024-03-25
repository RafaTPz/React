import React from 'react';
import {Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Config from './pages/Config';
import Aboutus from './pages/Aboutus'
import LoginPage from './pages/Loginpage';

export default function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/config" element={<Config />} />
            <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
    );
}