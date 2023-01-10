import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from '@material-ui/core';

const Container = styled.div`
    
`;

const Wrapper = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  margin: 10px 20px;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  flex: 1;
`;

const LanguageContainer = styled.div`
  font-size: 20px;
  margin-right: 30px;
  cursor: pointer;
`;

const SearchConatiner = styled.div`
  border: 0.5px solid grey;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  border: none;
`;


const Center = styled.h1`
  flex: 1;
  text-align: center;
`;

const Logo = styled.div`
    font-weight: 500;

`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MenuItem = styled.div`
  margin-left: 20px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <LanguageContainer>
              EN
          </LanguageContainer>
          <SearchConatiner>
            <Input placholder="Search"/>
            <Search/>
          </SearchConatiner>
        </Left>
        <Center>
          <Logo>Shettys</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
          <Badge badgeContent={2} color="primary">
            <ShoppingCartOutlined />
          </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar