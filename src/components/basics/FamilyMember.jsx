import React from "react";

export default (props) => {
    const {nome, lastName} = props
    return (
        <div>
            {nome} <strong>{lastName}</strong>
        </div>
    )
}