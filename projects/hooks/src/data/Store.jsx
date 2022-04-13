import React, { useState } from "react";

const initialState = {
    number: 1234,
    text: "context-api + hooks"
}

export const AppContext = React.createContext()

export default (props) => {
    const [state, setState] = useState(initialState)

    function updateState(key, newValue){
        setState({
            ...state,
            [key]: newValue
        })
    }

    return (
        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: newValue => updateState('number', newValue),
            setText: newValue => updateState('text', newValue)
        }}>
            {props.children}
        </AppContext.Provider>
    )
}