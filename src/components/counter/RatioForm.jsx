import React from "react";

export default (props) => {
    return(
        <div>
            <label htmlFor="inputRatio">Ratio: </label>
            <input 
                type="number" 
                value={props.ratio} 
                onChange={event => props.setRatio(event.target.value)}
            />
        </div>
    )
}