import React from 'react';
import data from './datatwo.json'

class Experiences extends React.Component{
constructor(){
    super()
}
render(){
    
    return(
        // console.log(data)
        data.Experiences.map((elem)=>{
            const companyName = elem.companyName
            const logo = elem.logo
            const roles = elem.roles;
            return(
            <>
            <p>{logo}</p>
            <p>{companyName}</p>
            {roles.map(set => <p>{set.roles}</p>)}
            </>
        )}
    )
    )
    
}
}
       


export default Experiences