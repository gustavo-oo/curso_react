import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import useCounter from '../../hooks/useCounter'
import useFetch from '../../hooks/useFetch'

const UseRef = (props) => {
    const [counter, increment, decrement] = useCounter(1)

    const url = 'http://files.cod3r.com.br/curso-react/estados.json'
    const response = useFetch(url)

    function showResponse(response) {
        return response.map((state, index) => <li key={index}>{state.nome} - {state.sigla}</li>)
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <SectionTitle title="Exercício #01"/>

            <div className="center">
                <span className="text">{counter}</span>

                <div>
                    <button className="btn" 
                        onClick={() => decrement()}>
                    -1
                    </button>

                    <button className="btn" 
                        onClick={() => increment()}>
                    +1
                    </button>
                </div>

            </div>

            <SectionTitle title="Exercício #02"/>

            <div className="center">
                <ul>
                    {response.loading ? false : showResponse(response.data)}
                </ul>
            </div>

        </div>
    )
}

export default UseRef
