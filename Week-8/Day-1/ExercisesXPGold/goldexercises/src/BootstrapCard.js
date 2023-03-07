import React from 'react'


const BootstrapCard = (props) => {
console.log(props)
    return(
        props.celebrities.map(celeb => (
        <div className="card m-5" style={{width: '30rem'}}>
        <img className="card-img-top" src={celeb.imageUrl} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title"> {celeb.title}</h5>
          <p className="card-text">{celeb.description}</p>
          <a href="#" class="btn btn-primary">{celeb.buttonLabel}</a>
        </div>
      </div>
    )))
}

export default BootstrapCard

