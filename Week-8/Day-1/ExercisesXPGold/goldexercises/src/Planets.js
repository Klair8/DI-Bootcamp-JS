import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

const Planets = (props) => {
    return (
        props.planets.map(planet=>{
        <ListGroup key={planet.id}>
        <ListGroup.Item>{planet.planets}</ListGroup.Item>
         </ListGroup>
            
    }))
        
        }

export default Planets;