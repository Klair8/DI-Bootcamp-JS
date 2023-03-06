import React from 'react'


class Events extends React.Component{
    constructor(){
        super()
        this.state={
            isToggleOn:'true'
        }
    }

clickMe = ()=>{
 alert(`I was clicked`)
}

handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13 ) {
      alert("The Enter key was pressed, your input is: " + event.target.value);
    }
  }

  switchToggle =() =>{   //function but condition written in the render
    this.setState({ isToggleOn: !this.state.isToggleOn });
    }

render (){

    const buttonText = this.state.isToggleOn ? "ON" : "OFF";

    return(     
        <div>
            <button type='button'
            onClick={this.clickMe} // we are calling the function when the button is click the color change
            >Click </button>
            <input type="text" onKeyDown={this.handleKeyPress} />
            <button type='button'
            onClick={this.switchToggle}
            >ToggleButton</button>
            {buttonText}
        </div>
    )
}
}


export default Events