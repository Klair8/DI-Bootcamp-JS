import logo from './logo.svg';
import './App.css';
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Color from './components/Color'
import Child from './components/Color'

class BuggyCounter extends React.Component{
  constructor(){
    super()
    this.state ={
      count :0
    }
  }

  handleClick=()=>{
    this.setState({count:this.state.count +1})
  }

  render(){

   if(this.state.count >5){
   throw Error('crashed')
  }
  return(
    <>
    {this.state.count}
    <button onClick={this.handleClick}> ADD Counter </button>
    </>
  )
}
}

function App() {
  return (
    <div className="App">
      {/* simulator 1 */} 
     {/* <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary> */}

      {/* simulator 2 */}
      {/* <ErrorBoundary>
            <BuggyCounter />
          </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary> */}

      {/* simulator3 */}
        {/* <BuggyCounter /> */}
        <Color />
        <Child />
    </div>
  );
}

export default App;
