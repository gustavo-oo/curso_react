import React, {useEffect, useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

const UseEffect = (props) => {
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1)
    const [status, setStatus] = useState('')

    function calcFatorial(value){
        if(value < 0) return -1
        if (value == 0) return 1; 
        return calcFatorial(value - 1) * value
    }

    useEffect(() => setFatorial(calcFatorial(number)), [number])

    useEffect(function(){
        setStatus(number % 2 == 0 ? 'Even' : 'Odd')
    }, [number])


    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01"/>

            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial}</span>
                </div>
                
                <input type="number" className="input" 
                    value={number} 
                    min={0}
                    onChange={event => setNumber(event.target.value)}/>
            </div>

            <SectionTitle title="Exercício #02"/>

            <div className="center">
                <div>
                    <span className="text">Odd or Even: </span>
                    <span className="text red">{status}</span>
                </div>
            </div>

        </div>
    )
}

export default UseEffect
