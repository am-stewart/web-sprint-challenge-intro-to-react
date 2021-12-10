// Write your Character component here
import React from 'react';
import styled from 'styled-components';


const Character = props => {
    console.log(props, 'this is props')
    return (
        <div>
           {props.character.name} 
        </div>
    )
}

export default Character;