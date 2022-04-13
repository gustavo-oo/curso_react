import React, {useState} from "react";

import './Input.css'

export default (props) => {
    const [value, setValue] = useState('Initial')

    function onChange(event) {
        setValue(event.target.value)
    }

    return(
        <div className="InputDiv">
            <div className="ControlledInput">
                <h2>Controlled Component</h2>
                <h3>{value || `"Empty"`}</h3>
                <input value={value} onChange={onChange}/>
            </div>
            
            <div>
                <h2>Uncontrolled Component</h2>
                <input value={undefined}/>
            </div>
        </div>
    )
}