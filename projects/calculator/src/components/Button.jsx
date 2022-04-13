import React from "react";

import "./Button.css"

export default (props) => {
    let classProperties = 'button '
    classProperties += props.operation ? 'operation' : ''
    classProperties += props.double ? 'double' : ''
    classProperties += props.triple ? 'triple' : ''

    return(
        <button 
            className={classProperties}
            onClick={() => props.onClick && props.onClick(props.label)}>
            {props.label}
        </button>
    )
}