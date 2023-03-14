export const logAction =(store) => next =>action =>{
    next(action)
    console.log('caught in the middleware',store.getState());
}