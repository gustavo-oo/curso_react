import { numberReducer } from "./number"
import { userReducer } from "./user"

export default function reducer(state, action){
    let newState = {...state}

    newState = numberReducer(newState, action)
    newState = userReducer(newState, action)

    return newState
}