import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    background-color: white;
    padding: 20px;
`;

const Title = styled.div`
    font-size: 30px;
    font-weight: 200;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  background-color: teal;
  border: none;
  color: white;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Link = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  text-decoration: underline;
  font-weight: 150;
`;


const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>
                SIGN IN
            </Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
            </Form>
            <Button>
                LOGIN
            </Button>
            <Link>
              DO YOU NOT REMEBER THE PASSWORD?
            </Link>
            <Link>
              CREATE A NEW ACCOUNT
            </Link>
        </Wrapper>
    </Container>
  )
}

export default Login