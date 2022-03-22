import React from "react";

export default (props) => {
    const numberList = props.numberList
    return(
        numberList.map((number, i) => {
            if(numberList[i+1] === undefined){
                return(<span key={i}>{number}</span>)
            }else{
                return(<span key={i}>{number}, </span>)
            }
        })
    )
}