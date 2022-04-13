import React from "react";

import {Link} from "react-router-dom"

import "./Menu.css"

export default () => {
    return(
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/param/teste">Param #01</Link>
                    </li>
                    <li>
                        <Link to="/param/cool">Param #02</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/NaoExiste">Nao Existe</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}