import React from "react";

import DirectChild from "./DirectChild";

export default (props) => {
    return(
        <div>
            <DirectChild text="Test Text" number={10} bool={true}/>
        </div>
    )
}