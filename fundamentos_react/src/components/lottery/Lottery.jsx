import React, {useState} from "react";

import Button from "../counter/Button";
import DisplayNumbers from "./DisplayNumbers";
import QuantityForm from "./QuantityForm";

export default () => {
    const [numberList, setNumberList] = useState([])
    const [quantity, setQuantity] = useState(6)

    function generateNewNumbers(){
        const minNumber = 1
        const maxNumber = 60

        const possibleNumbers = Array.from({length: maxNumber}, (_, i) => i + minNumber)
        
        const sortedPossibleNumbers = possibleNumbers.sort(() => 0.5 - Math.random());

        const chosenNumbers = sortedPossibleNumbers
            .slice(0, quantity)
            .sort((a,b) => a - b)

        setNumberList(chosenNumbers)
    }

    return(
        <div>
            <QuantityForm quantity={quantity} setQuantity={setQuantity}/>

            <Button text="Generate" onClick={generateNewNumbers}/>

            <h2>Numbers:</h2>

            <DisplayNumbers numberList={numberList}/>

        </div>
    )   
}