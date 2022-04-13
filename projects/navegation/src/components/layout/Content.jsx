import React from "react";
import {Routes, Route, Redirect} from 'react-router-dom'

import "./Content.css"

import About from "../../views/examples/About";
import Home from "../../views/examples/Home";
import Param from "../../views/examples/Param";
import NotFound from "../../views/examples/NotFound";

export default () => {
    return(
        <main className="Content">
            <Routes>
                <Route path="*" element={<NotFound/>} />
                <Route index element={<Home/>} /> 
                <Route path="/about" element={<About/>} />
                <Route path="/param/:id" element={<Param/>} />
            </Routes>
        </main>
    )
} 