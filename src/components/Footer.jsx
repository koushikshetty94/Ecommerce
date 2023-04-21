import { AddLocation, Facebook, Instagram, LinkedIn, LocalPhone, Mail, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    `;

const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding:20px;
    `;

const Logo = styled.h1`
    font-weight: 500; 
`;

const Description = styled.div`
    margin: 20px 0;
    `;

const SocialContainer = styled.div`
    display: flex;
   `;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
`;

const Center = styled.div`
    flex:1;
    padding:20px;
    `;

const Title = styled.h3`
    margin-bottom: 30px;
    `;

const List =styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    `;

const ListItem =styled.li`
    width: 50%;
    margin-bottom: 10px;
    `;

const Right = styled.div`
    flex:1;
    padding:20px;
    `;

const Contact =styled.h3`
    margin-bottom: 30px;
    `;

const ContactItem =styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    `;

const Payment =styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>
                Shettys
            </Logo>
            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi alias, vitae id dolorum accusamus sunt saepe voluptatum molestias! Nisi sunt magnam esse! Doloremque perferendis harum ut, praesentium sapiente maiores omnis?
            </Description>
            <SocialContainer>
                <SocialIcon color="EB5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <LinkedIn/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>
                Useful Links
            </Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accesories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Contact>Contact</Contact>
            <ContactItem>
                <AddLocation/> 622 Dixie Path, South Tobinchester 98336
            </ContactItem>
            <ContactItem>
                <LocalPhone/>+1 2345 67890
            </ContactItem>
            <ContactItem>
                <Mail/> contact@shetty.dev
            </ContactItem>
            <Payment  src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer