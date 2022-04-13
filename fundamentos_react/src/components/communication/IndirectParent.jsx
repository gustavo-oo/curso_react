import React, {useState} from "react";

import IndirectChild from "./IndirectChild";

export default (props) => {
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [isOld, setIsOld] = useState()

    console.log(name)

    function SendInfo(name, age, isOld){
        setName(name)
        setAge(age)
        setIsOld(isOld)
    }

    return(
        <div>
            <div>Parent{name ? ': '+name : false} {age ? age : false} {isOld ? isOld : false}</div>
            <IndirectChild onClick={SendInfo}/>
        </div>
    )
}