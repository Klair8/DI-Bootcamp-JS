// Exercise 3
import React from 'react';


const UserFavoriteColors = (props) => {
    return(
        props.user.map((animal, index) =>(
            <li key={index}>{animal.favAnimals}</li>
         
        ))
    )
    }

  export default UserFavoriteColors;

