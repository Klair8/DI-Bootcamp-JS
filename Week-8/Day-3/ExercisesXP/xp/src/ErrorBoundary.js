import React from'react'

class ErrorBoundary extends React.Component{
    constructor(){
        super();
        this.state ={
            error: null,
            errorInfo:null
        }
    }

componentDidCatch(error, errorInfo){
    console.log('error=>', error);
    console.log('errorInfo=>', errorInfo);
    this.setState({error: error, errorInfo:errorInfo})
}
render(){
    if(this.state.error){
    return(
    <div> 
        Something went wrong  -- we are working on it 
    </div>
    ) }
    return this.props.children 
}
}

export default ErrorBoundary



