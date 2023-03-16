import React from 'react'
import blog from '../blog.png' 
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Home extends React.Component{
    constructor(props){
        super(props)

    }
       
    render(){
        return(
            <div>
            <h3>Home</h3> 
            { this.props.returnPost.length > 0 ? this.props.returnPost.map((post, index) => {
            console.log('post',post)
            return(
            <div key={post.id}  style={{display: 'flex',border:'1px solid black', width:'80%'}} >
                <img src={blog} alt="Logo" />
                <h4>{post.title}</h4>
              <p>{post.body}</p>
                <Link to={`/${post.id}`}>Go</Link>
                </div>
                )
            }
            ): <h1> No post </h1>

        }
            </div>
        )}}
    


                



const mapStateToProps=(state)=>{
    console.log('result',state)
    return{
       returnPost : state.posts
    }

}

export default connect(mapStateToProps)(Home)




//  Create a ternary operation to check:
// if there is at least one post:
// map the posts
// use the id as the key,
// use the image blog that we imported
// add a Link that redirect the user to the specific post, when clicked on.
// else, return a message “No post to show”