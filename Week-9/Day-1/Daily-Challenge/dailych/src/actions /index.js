export const DETAIL = 'DETAIL'  


export const showDetail = (movieObj) =>{  
    // console.Console.log('showdetail', movieObj)
    return{
        type:DETAIL,
        payload: movieObj
    }
}