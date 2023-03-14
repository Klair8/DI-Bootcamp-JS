import { addtoLocalStorage, getFromLocalStorage } from "../storage/localstorage"

let initialState = {
    currentIndex: -1,   //its giving you the n*of the index of the array
    // list: JSON.parse(localStorage.getItem('transactions'))
    // list: []
    list: getFromLocalStorage('transactions')
}


export const transactionReducer = (state = initialState, action={}) => {
    // console.log('jsonlist',state)

    switch(action.type){ 
        case 'INSERT':
           state.list.push(action.payload)
           addtoLocalStorage('transactions',[...state.list])
           return { ...state,list: [...state.list], currentIndex: -1}
       
        case 'UPDATE':
            state.list[state.currentIndex] = action.payload
            addtoLocalStorage('transactions',[...state.list])
            return{
                ...state,
                currentIndex:-1,
                list:[...state.list]
            };
        case 'UPDATE-INDEX':
            return{
                ...state, 
                currentIndex: action.payload,
            };
        case 'DELETE':
            state.list.splice(action.payload,1)
            addtoLocalStorage('transactions',[...state.list])
                return{
                ...state,
                currentIndex: -1,
                list: [...state.list]
                };
            default:
            return state
    }
}

            


