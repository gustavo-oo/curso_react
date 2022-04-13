export function userReducer(state, action){
    switch(action.type){
        case 'login':
            if(action.payload.name !== '')
                return {...state, user: {name: action.payload.name}}
            else
                return state

        case 'nameForm':
            return {...state, name: action.payload.name}

        default:
            return state
    }
}