import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';

const StyledApp = styled.div`
  padding: 8px;
  background-color: ${props => props.theme.black};

  h1{
    color: ${props => props.theme.yellow};
  }
`
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [character, setCharacter] = useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(() => {
  axios.get('https://swapi.dev/api/people')
  .then(res => {
    setCharacter(res.data)
  })
  .catch(err => {
    console.log('error!')
  })
},[])

  return (
    <StyledApp className="App">
      <h1 className="Header">Characters</h1>
      <div>
        {
          character.map(character => {
            return <Character character={character} />
          })
        }
      </div>
    </StyledApp>
  );
}

export default App;
