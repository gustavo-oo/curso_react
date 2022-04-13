export function numberReducer(state, action){
    switch(action.type){
        case 'number_add2':
            return {...state, number: state.number + 2}

        case 'number_times7':
            return{...state, number: state.number*7}

        case 'number_divide25':
            return{...state, number: state.number/25}

        case 'number_parse_int':
            return{...state, number: parseInt(state.number)}

        case 'number_add':
            return{...state, number: state.number + action.payload.value}

        default:
            return state
    }
}