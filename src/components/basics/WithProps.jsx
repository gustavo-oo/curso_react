import React from "react"

export default function WithProps(props){
    const status = props.grade >= 7 ? 'Aprovado' : 'Reprovado'

    return (
        <div>
            <h2>{props.title}</h2>
            <p> 
                <strong> { props.name } </strong> 
                tem nota 
                <strong> { props.grade } </strong>
                e foi
                <strong> { status }</strong>
            </p>
        </div>
    )
}