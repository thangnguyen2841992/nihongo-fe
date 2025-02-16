import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import Register from "./layout/auth/Register";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Register/>}></Route>
                    <Route path="/register" element={<Register/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
