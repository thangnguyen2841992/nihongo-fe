import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import Register from "./layout/auth/Register";
import ActiveAccount from "./layout/auth/ActiveAccount";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Register/>}></Route>
                    <Route path="/register" element={<Register/>}></Route>
                    <Route path = "/active/:username" element={<ActiveAccount/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
