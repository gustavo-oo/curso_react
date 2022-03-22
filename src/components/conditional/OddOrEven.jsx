import React from "react";

export default (props) => {
    const {number} = props
    const isOdd = number % 2 != 0
    return(
        <div>
            <span>{isOdd ? 'Odd' : 'Even'}</span>
        </div>
    )
}