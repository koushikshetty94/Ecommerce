import { Send } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60vh;
`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;

const Description = styled.div`
    font-size: 24px; 
    font-weight: 300;
    margin-bottom: 20px;
`;

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    display: flex;
    background-color: white;
    justify-content: space-between;
    border: 1px solid lightgray;
`;

const Input = styled.input` 
    flex: 8;
    border: none;
    padding-left: 20px;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color:white;
`;

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>
            Get timely updates from your favourite products.
        </Description>
        <InputContainer>
            <Input placeholder='Your Email'></Input>
            <Button>
                <Send />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter