import React from 'react'
import data from './datatwo.json'


class Example1 extends React.Component{
    constructor(props){
        super(props);
        console.log('props',props)
    }
    render (){
        return (
            // console.log(data)
            data.SocialMedias.map((elem=>(
                <>
                <ul>
                    <li>{elem}</li>
                </ul>
                </>
                )
          )
        )
        )
    }
}

export default Example1