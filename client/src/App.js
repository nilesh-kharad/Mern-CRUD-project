import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Forgot from './components/Forgot';
import Add from './components/Add';
import Reset from './components/Reset';

const App = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route exact path="/" element={<Signup />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Forgot" element={<Forgot />} />
                <Route path="/Add" element={<Add />} />
                <Route path="/Reset" element={<Reset />} />
            </Routes>

        </>
    )
}

export default App;