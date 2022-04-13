import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from '../../store'

import {number_add2, login} from "../../store/actions"


const UseReducer = (props) => {
    const [state, dispatch]  = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ? 
                    <span className='text'>{state.user.name}</span>
                    :
                    <span className="text">No user</span>
                }

                <div>
                    <input type="text" className="input" value={state.name} 
                        onChange={
                            (event) => 
                            dispatch({
                                type: 'nameForm', 
                                payload: {
                                    name: event.target.value
                                }
                            })
                        }/>

                    <button className="btn" 
                        onClick={() => login(dispatch, state.name)}> Login
                    </button>
                </div>
                

                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" 
                        onClick={() => number_add2(dispatch)}>+2
                    </button>

                    <button className="btn" 
                        onClick={() => dispatch({type: 'number_times7'})}>x7
                    </button>

                    <button className="btn" 
                        onClick={() => dispatch({type: 'number_divide25'})}>/25
                    </button>

                    <button className="btn" 
                        onClick={() => dispatch({type: 'number_parse_int'})}>Int
                    </button>

                    <button className="btn" 
                        onClick={() => 
                            dispatch({
                                type: 'number_add', 
                                payload: {value: -9}
                            })
                        }>
                        -9
                    </button>
                    
                </div>
            </div>
        
        </div>
    )
}

export default UseReducer
