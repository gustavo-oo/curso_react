import React from "react";

export default (props) => {
    const minAge = 20, maxAge = 100
    const randomAge = Math.floor(Math.random() * maxAge) + minAge
    const isOld = () => {
        if(randomAge > 60){
            return 'Old'
        }else{
            return 'Young'
        }
    }

    return(
        <div>
            <div>Child</div>
            <button onClick={() => props.onClick('John', randomAge, isOld)}>
                Send Info
            </button>
        </div>  
    )
}