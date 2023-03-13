const initialState ={
    searchTerm : ''
}

const searchReducer = (state = initialState,action={}) =>{
    switch(action.type){
        case 'ESSAY':
        return{...state,array:action.payload}
        default:
            return { ...state }

    }
}