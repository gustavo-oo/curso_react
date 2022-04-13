import React from "react";

export default React.memo((props) => { //React memo faz com que o componente só renderize novamente se os props forem alterados
    const increment = props.onClick
    return (
        <div>
            <button className="btn" onClick={() => increment(6)} >+6</button>
            <button className="btn" onClick={() => increment(12)} >+12</button>
            <button className="btn" onClick={() => increment(18)} >+18</button>
        </div>
    )
})