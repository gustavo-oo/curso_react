import React, {useState} from "react";
import "./Calculator.css"

import Button from "../components/Button";
import Display from "../components/Display";

const MAX_DISPLAY_DIGITS = 10

export default () => {
    const [displayValue, setDisplayValue] = useState('0')
    const [operation, setOperation] = useState(null)
    const [values, setValues] = useState([0, 0])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [clearDisplayAfterOperation, setClearDisplayAfterOperation] = useState(false)

    function clearDisplay(){
        setDisplayValue('0')
        setOperation(null)
        setValues([0, 0])
        setCurrentIndex(0)
    }

    function saveResult(result){
        const newValues = [...values]

        newValues[0] = result

        setValues(newValues)
    }

    function showResult(result){
        setDisplayValue(result)
    }

    function calcResult(operation){
        let result
        switch(operation){
            case '+':
                result = values[0] + values[1]
                break
            case '-':
                result = values[0] - values[1]
                break
            case '*':
                result = values[0] * values[1]
                break
            case '/':
                result = values[0] / values[1]
                break
        }
        return result
    }

    function Operation(operationChar){
        if(currentIndex === 0 && operationChar === '='){
            return
        }

        if(currentIndex === 1){
            const result = calcResult(operation)

            if(operationChar === '='){
                //Tratar números grandes
                showResult(result)
            }

            saveResult(result)
            setCurrentIndex(0)
        }
        
        if(operationChar !== '='){
            setOperation(operationChar)
            setCurrentIndex(1)
        }        

        setClearDisplayAfterOperation(true)
    }

    function insertDigit(digit){
        if (digit === '.' && displayValue.includes('.')){
            return
        }

        const shouldClearDisplay = displayValue === '0' || clearDisplayAfterOperation

        setClearDisplayAfterOperation(false)
        
        const newDisplayValue = shouldClearDisplay ? digit : displayValue + digit

        if(newDisplayValue.length <= MAX_DISPLAY_DIGITS){
            setDisplayValue(newDisplayValue)
        }
        
        const newValues = [...values]

        newValues[currentIndex] = parseFloat(newDisplayValue)
        
        setValues(newValues)

        console.log(newValues)       
    }


    return(
        <div className="calculator">
            <Display value={displayValue}/>
            <Button label="AC" triple onClick={clearDisplay}/>
            <Button label="/" operation onClick={Operation}/>
            <Button label="7" onClick={insertDigit}/>
            <Button label="8" onClick={insertDigit}/>
            <Button label="9" onClick={insertDigit}/>
            <Button label="*" operation onClick={Operation}/>
            <Button label="4" onClick={insertDigit}/>
            <Button label="5" onClick={insertDigit}/>
            <Button label="6" onClick={insertDigit}/>
            <Button label="-" operation onClick={Operation}/>
            <Button label="1" onClick={insertDigit}/>
            <Button label="2" onClick={insertDigit}/>
            <Button label="3" onClick={insertDigit}/>
            <Button label="+" operation onClick={Operation}/>
            <Button label="0" double onClick={insertDigit}/>
            <Button label="." onClick={insertDigit}/>
            <Button label="=" operation onClick={Operation}/>
        </div>
    )
}