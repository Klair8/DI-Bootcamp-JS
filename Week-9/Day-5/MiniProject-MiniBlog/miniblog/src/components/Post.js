import React from 'react'
import { connect} from 'react-redux'
import {useParams, useNavigate} from 'react-router-dom'
import {deletePost} from '../actions/postActions'

const Post =(props) =>{

  const params =useParams();
  const navigate=useNavigate();
  console.log('postid',params)

  const result = props.findPost.find((element) => element.id === params.post_id )
  console.log('postres',result)

   const handleClick =(e)=> {
    console.log('handleClick',e)
    props.deletePost(e)
    navigate('/')
  }

if(result == null){
  return <h1>Loading</h1>
}else{
    return(
        <div>
        <h1>Post</h1>
        <h4>{result.title}</h4>
        <p>{result.body}</p>
        <button onClick={() => handleClick(params.id)}> Delete </button> 
        </div>
      )
    }
  }


const mapStateToProps=(state)=>{
  console.log('poststate',state)
  return{
     findPost : state.posts
  }
}

  const mapDispatchToProps=(dispatch)=>{
    return{
      deletePost :(id) => dispatch(deletePost(id))
    }
  }


export default connect (mapStateToProps,mapDispatchToProps)(Post)