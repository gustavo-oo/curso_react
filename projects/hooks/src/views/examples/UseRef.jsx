import React, { useRef, useState, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = (string1, string2) => {
    if(string1.length){
        return [string1[0], ...merge(string2, string1.slice(1))]
    }else{
        return string2
    }
}

const UseRef = (props) => {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')

    const count = useRef(0)

    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    console.log(myInput1.current)

    useEffect(() => {
        count.current += 1
        myInput2.current.focus()
    }, [value1]);

    useEffect(() => {
        count.current += 1
        myInput1.current.focus()
    }, [value2]);

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercício #01"/>

            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
            </div>

            <div className="center">
                
                <input type="text" className="input" 
                    ref={myInput1}
                    value={value1} 
                    onChange={event => setValue1(event.target.value)}/>
            </div>

            <SectionTitle title="Exercício #02"/>

            <div className="center">
                <input type="text" className="input" 
                    ref={myInput2}
                    value={value2} 
                    onChange={event => setValue2(event.target.value)}/>
            </div>

        </div>
    )
}

export default UseRef
