import React from "react";
import {BrowserRouter, Routes} from 'react-router-dom'
import Content from "../components/layout/Content";
import Menu from "../components/layout/Menu";

import "./App.css"

export default () => {
    return(
        <div className="App">
            <BrowserRouter>
                <Menu/>
                <Content/>
            </BrowserRouter>
        </div>
    )
}