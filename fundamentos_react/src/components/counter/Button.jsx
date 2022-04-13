import React from "react";

export default (props) => {
    return(
        <React.Fragment>
            <button onClick={props.onClick}>{props.text}</button>
        </React.Fragment>
    )
}