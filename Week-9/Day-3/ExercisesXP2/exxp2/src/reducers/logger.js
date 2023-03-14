export const logAction =(store) =>next =>action =>{
    console.log('caught in the middleware',store.getState());
    console.log('action =>',action);
    console.log('next state =>',store.getState());
}