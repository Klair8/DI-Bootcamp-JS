export const changeInsert =(data)=>{
    return{
        type: 'INSERT',
        payload: data
    }
}

export const changeUpdate =(data)=>{
    return{
        type: 'UPDATE',
        payload: data
    }
}


export const changeDelete =(id)=>{
    return{
        type: 'DELETE',
        payload: id
    }
}
  
export const changeUpdate_Index =(index)=>{
    return{
        type: 'UPDATE-INDEX',
        payload: index
    }
}

