import React from 'react'
import data from './datatwo.json'


class Example2 extends React.Component{
    constructor(props){
        super(props);
        console.log('props',props)
    }
    render (){
        return(
            // console.log(data)
            data.Skills.map((elem)=>{
                const area = elem.Area;
                const skillset = elem.SkillSet;
                return(
                <>
                <p>{area}</p>
                {skillset.map(set => <li>{set.Name}</li>)}
                </>
                )}))
               
    }
}

export default Example2