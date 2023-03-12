// that is the function basically of what we need

const initialState = { 
    count: 0
};

export const reducer = (state = initialState, action={}) => {
    switch(action.type){   //because we want to see which type is calling the reducer
        case 'INCREASE_COUNT':
            return { ...state,count:state.count +1}
        case 'DECREASE_COUNT':
            return { ...state,count:state.count -1}
            default:
            return { ...state }
} 
    }  

