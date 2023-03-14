export const addtoLocalStorage =(key,value) =>{
    window.localStorage.setItem(key,JSON.stringify(value))
}

export const getFromLocalStorage = (key) =>{
    return JSON.parse(window.localStorage.getItem(key)) || []
}