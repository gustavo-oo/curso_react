import React from "react";

export default (props) => {
    const {min, max} = props

    const random_number = Math.floor(Math.random() * max) + min

    return(
        <div>
            <p> Random Number [{min}, {max}]: </p>
            <p> {random_number} </p>
        </div> 
    )
}