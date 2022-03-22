import React from "react";

export default (props) => {
    return(
        <div>
            <label htmlFor="inputRatio">Quantity of Numbers (Min: 6, Max: 60):</label>
            <input
                style={{width:"35px"}}
                type="number"
                value={props.quantity} 
                onChange={event => props.setQuantity(event.target.value)}
            />
        </div>
    )
}