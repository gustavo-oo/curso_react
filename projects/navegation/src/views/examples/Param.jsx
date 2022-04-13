import React from "react";

import {useParams} from 'react-router-dom'

export default () => {
    const {id} = useParams()

    return(
        <div className="Param">
            <h1>Param</h1>
            <h2>Value: {id}!</h2>
        </div>
    )
}