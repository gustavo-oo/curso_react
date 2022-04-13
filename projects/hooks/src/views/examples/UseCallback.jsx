import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallBackButtons from './UseCallBackButtons'

const UseCallback = (props) => {
    const[count, setCount] = useState(0)

    const increment = useCallback(function (delta){ //gera uma função em cache
        setCount(current => current + delta)
    }, [setCount])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

            <div className="center">
                <span className="text">{count}</span>

               <UseCallBackButtons onClick={increment} />
            </div>
        </div>
    )
}

export default UseCallback
