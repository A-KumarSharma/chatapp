import React, { useState } from 'react';
import styled from 'styled-components';
import List from './src/components/list/List';
import Detail from './src/components/detail/Detail';
import Chat from './src/components/chat/Chat';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  @media (min-width: 768px) {
    display: none; /* Hide on screens larger than 768px */
  }
`;

const Box = styled.div`
  width: 80%;
  margin: 1rem;
  padding: 1rem;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const BoxTitle = styled.h2`
  margin: 0 0 0.5rem 0;
`;

const BoxContent = styled.p`
  margin: 0;
`;



const ToggleButton = styled.button`
  padding: 0.5rem 1rem;
  border: 19px;
  background-color: rgba;
  color: black;
  cursor: pointer;
  border-radius: 40px;
  margin-bottom: 0.5rem;
  

  &:hover {
    background-color: #555;
  }
`;

function ResponsiveComponent() {
  const [visibleBox, setVisibleBox] = useState(null);

  const toggleVisibility = (boxIndex) => {
    setVisibleBox(visibleBox === boxIndex ? null : boxIndex);
  };

  return (
    <Container>
      <ToggleButton onClick={() => toggleVisibility(1)}>Chat List</ToggleButton>
      {visibleBox === 1 && (
        <Box>
         <List/> 
        </Box>
      )}
      
      <ToggleButton onClick={() => toggleVisibility(2)}>Chat</ToggleButton>
      {visibleBox === 2 && (
        <Box>
          <Chat/>
        </Box>
      )}

      <ToggleButton onClick={() => toggleVisibility(3)}>Detail</ToggleButton>
      {visibleBox === 3 && (
        <Box>
          <Detail/>
        </Box>
      )}
    </Container>
  );
}

export default ResponsiveComponent;
