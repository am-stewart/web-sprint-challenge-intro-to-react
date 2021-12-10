// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
 
 button {
     border: 2px solid ${props => props.theme.green};
     background: ${props => props.theme.gray};
     padding: 1%;
     margin: 1%;
     width: 25%;

     &:hover {
         transform: scale(1.2)
     }
 }
`

const Character = props => {
    return (
        <StyledCharacter>
           <button>{props.character.name}</button>
        </StyledCharacter>
    )
}

export default Character;