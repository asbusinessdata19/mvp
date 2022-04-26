import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from './Home';
import Categories from './Categories';
import Learn from './Learn';

export default function Main() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/Learn" element={<Learn />} />
        </Routes>
    )
}