import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    background-color: white;
    padding: 30px;
    `;

const Title = styled.h3`
    font-weight: 400;
    font-size: 20px;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    width: 40%;
    margin: 10px 10px 10px 0;
    padding: 10px;
`;

const Agreement = styled.div`
    font-weight: 200;
    font-size: 14px;
    margin-bottom: 20px;
`;

const Span = styled.span`
    font-weight: 700;
`;

const Button = styled.button`
    width: 220px;
    height: 40px;
    background-color: teal;
    border: none;
    color: white;
    font-size: 18px;
    font-weight: 200;
    cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>
                CREATE AN ACCOUNT
            </Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
            </Form>
            <Agreement>
                By creating an account, I consent the processing of my personal data in accordance with the
                <Span> PRIVACY POLICY.</Span> 
            </Agreement>
            <Button>
                Create
            </Button>
        </Wrapper>
    </Container>
  )
}

export default Register