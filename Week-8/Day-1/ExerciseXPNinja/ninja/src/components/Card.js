import React from "react"
import './style.css';


const Card=(props)=>{
    console.log(props)
    return (
        props.liste.map(liste => (
                <div className="card m-5" style={{width: '50rem'}}>
                    <img className="card-img-top"  src={liste.image} style={{width:'150px',height:'150px'}} alt="Card image cap" />
                <div className="card-body">
                     <h5 className="card-title">{liste.title}</h5>
                     <p className="card-text">{liste.description}</p>
                </div>
                </div>
    
           )   )
    )
}


export default Card