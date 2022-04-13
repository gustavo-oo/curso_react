import {useState} from "react";

export default (initialValue = 0) => {
    const [value, setValue] = useState(initialValue)

    function increment(){
        setValue(value + 1)
    }

    function decrement(){
        setValue(value - 1)
    }

    return[value, increment, decrement]
}