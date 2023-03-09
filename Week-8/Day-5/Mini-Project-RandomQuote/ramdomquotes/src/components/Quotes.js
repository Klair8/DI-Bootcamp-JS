import React from 'react';

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      color:''
    };
  }

  changeRandomQuote = () => {
    const { quotes,colors } = this.props;
    const { quote,color } = this.state;

    // Filter out the current quote from the available quotes
    const availableQuotes = quotes.filter(elem => elem !== quote);

    // Select a random quote from the available quotes & colors
    const randomQuote = availableQuotes[Math.floor(Math.random() * availableQuotes.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.setState({ quote: randomQuote, color:randomColor});
    console.log(randomQuote,randomColor)
  };



  render() {
    const {quote} = this.state; // this state render
    const {color} = this.state; // 
    return (
          <div style={{backgroundColor:color, "width" : "500px" , "color":"black"}}> 
            <h1>{quote.quote}</h1>
            <p>{quote.author}</p>
        <button type='button' onClick={this.changeRandomQuote}>
          Change Quote
        </button>
      </div>
    );
  }
}

export default Quotes;