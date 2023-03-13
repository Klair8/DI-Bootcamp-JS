
let initialState = {
    currentIndex: -1,
    list: JSON.parse(localStorage.getItem('transactions'))
}


export const transactionReducer = (state = initialState, action={}) => {
    console.log('jsonlist',state)
    switch(action.type){ 
        case 'INSERT':
            const newList = [action.payload];
            localStorage.setItem('transactions', JSON.stringify(newList));
            return { 
                ...state,
                list:newList
              
            };
        case 'UPDATE':
            return{
                ...state,
                currentIndex:action.payload
            };
        case 'UPDATE-INDEX':
            return{
                ...state, 
                list: action.payload.list,
                currentIndex: action.payload.currentIndex,
            };
        case 'DELETE':
                return{
                ...state,
                list:state.list.filter((item,index) => index!==action.payload)
                };
            default:
            return state
    }
}

            


