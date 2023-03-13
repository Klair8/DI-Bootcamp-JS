
import {connect} from'react-redux' // its a function use to connect a react component to the redux store 
import { showDetail } from '../actions '


const MovieList = (props)=>{
    console.log('movielist',props)
    let array = props.List
 return(
        <div style={{display:'inline-block', width:'50'}}>
        <h2>Movie List</h2>
        {array.map((item,i)=>(
            <div key={i}>
            <p>{item.title}</p>
            <button onClick={()=>props.showD(item)}>Details</button>
            </div>
        ))}
        </div>
    )
        }

const mapStateToProps = (state)=>{
    console.log('state',state)
    return{
        List:state.movies_reducer.movieList
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        showD: (obj) => dispatch(showDetail(obj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)