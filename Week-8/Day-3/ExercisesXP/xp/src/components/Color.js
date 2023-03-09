import React from 'react'

class Color extends React.Component{
    constructor(){
        super();
        this.state ={
            favoriteColor:'red',
            message:'',
            messageOne: '',
            show:true
        }
    }

  changeColor = () =>{
    this.setState({favoriteColor:"blue"});
  }

//    //part1 //
  shouldComponentUpdate(nextProps, nextState){
    // if (nextProps.value!== nextState.value){
        return true;
    // }else{
    //     // return false;
    // }
    }

    componentDidMount(){
        setTimeout( () => this.setState({favoriteColor : 'yellow'}),5000)
      }

      componentDidUpdate(prevProps, prevState,snapshot){
        if(this.state.favoriteColor === 'yellow' && this.state.message === ''){
          this.setState({message:'blahbhla'})
        }
        if(snapshot !== this.state.favoriteColor){
          if (this.state.messageOne == ''){
            this.setState({messageOne:snapshot})
          }
        }
      }

      getSnapshotBeforeUpdate() {
        return 'pink'
      }
    

    render(){

        return(
            <div>
        {/* <h3>{this.props.value}</h3> */}
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <div>{this.props.value}</div>
        <button type='button'
        onClick={this.changeColor}>changeColor</button>
        <div>
          did update : {this.state.message}<br/>
          Snapshot : {this.state.messageOne}
        </div>
        </div>
    )}
        }


class Child extends React.Component{
          constructor(){
              super()
          //     this.state ={
          //         favoriteColor:'red',
          //         message:'',
          //         messageOne: '',
          //         show:'true'
              }
          
          componentWillUnmount () {
              alert('alert')
          }

          changeHeader = () =>{
            this.setState({show:true});
          }


    render(){

      return(
          <div>
          <header>Hello World!</header>
         {/* <p> {this.state.isShow}</p> */}
          <button type='button' onClick={this.changeHeader}>DELETE</button>
      </div>
  )}
      }


export default Child 