export const INSERT = 'INSERT'
export const UPDATE = 'UPDATE'
export const UPDATE_INDEX = 'UPDATE_INDEX'
export const DELETE = 'DELETE'


export const changeInsert =(data)=>{
    return{
        type: 'INSERT',
        payload: data
    }
}

export const changeUpdate_Index =(index)=>{
    return{
        type: 'UPDATE-INDEX',
        payload: index
    }
}

export const changeUpdate =(data)=>{
    return{
        type: 'UPDATE',
        payload: data
    }
}


export const changeDelete =(index)=>{
    return{
        type: 'DELETE',
        payload: index
    }
}
  


