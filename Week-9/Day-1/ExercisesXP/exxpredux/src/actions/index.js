export const changeIncreaseCount = (value)=>{
    return{
        type:'INCREASE_COUNT',
        payload: value
    }
}

export const changeDecreaseCount  = (value)=>{
    return{
        type:'DECREASE_COUNT',
        payload: value
    }
}