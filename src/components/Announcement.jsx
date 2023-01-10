import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: teal;
    height: 30px;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Announcement = () => {
  return (
    <Container>Super deal! Free shipping on orders above 90$</Container>
  )
}

export default Announcement