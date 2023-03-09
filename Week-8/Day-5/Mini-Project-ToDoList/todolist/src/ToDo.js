import React from 'react'

class ToDo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      inputValue: '',
      todos:[]
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newItem = this.state.inputValue.trim() // to clean the white space
    if (newItem) {
    this.setState(prevState => ({ todos: [...prevState.todos, newItem], text: '', inputValue: '' }));
    }
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      const newItem = event.target.value.trim()
      if (newItem) {
    this.setState(prevState => ({ todos: [...prevState.todos, newItem], text: '', inputValue: '' }));
      }
    } else {
      this.setState({ inputValue: event.target.value })
    }
  }

  render() {
   const {todos, inputValue} = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h1 style={{ display: 'inline-block', padding: '10px', margin: '20px', border: '1px solid #ccc' }}>
            ToDo's
          </h1>
          <br />
          <ul>
            {/* map into my array  */}
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
          <label style={{ fontSize: '10px' }}>Add a new Todo:</label>
          <br/>
          <input
            style={{outline: 'none', border: 'none', borderBottom: '1px solid #9e9e9e' }}
            type="text"
            name="text"
            onKeyDown={this.handleKeyPress}
          />
        </form>
      </>
    )
  }
}

export default ToDo



 
 
   
  
