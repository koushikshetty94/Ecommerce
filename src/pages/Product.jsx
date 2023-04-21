import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const Container = styled.div``;

const Wrapper = styled.div`
    display: flex;
    padding: 50px;
`;

const ImgConatiner = styled.div`
    flex: 1;
    `;

const Image = styled.img`
    width:100%;
    height: 90vh;
    object-fit: cover;
    `;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
`;

const Title = styled.h3`
    font-size: 40px;
    font-weight: 150;
`;

const Description = styled.p`
    padding: 20px 0;
    font-size: 20px;
    font-weight: 300;
`;

const Price = styled.span`
    font-weight: 50;
    font-size: 50px;

`;

const FilterContainer = styled.div`
    display: flex;
    margin: 40px 0;
`;

const Filter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 40px;
`;

const FilterTitle = styled.div`
    font-size: 20px;
    font-weight: 200;
    margin-right: 10px;
`;

const ColorSelector = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #${props=> props.color};
    margin-right: 10px;
    `;

const FilterSize= styled.select`
    height: 40px;
    width: 50px;
`;

const SizeOption = styled.option`
   
`;

const BuyConatiner = styled.div`
    display: flex;
`;

const QtyContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 50px;
`;

const Qty = styled.div`
    margin: 0 10px;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Button = styled.button`
    width: 100px;
    height: 40px;
    border: 2px solid #008080;
    background-color: white;
    cursor: pointer;
    &:hover{
      background-color: #f8f4f4;
  }
`;


const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgConatiner>
                <Image src="https://i.ibb.co/S6qMxwr/jean.jpg">
                </Image>
            </ImgConatiner>
            <InfoContainer>
                <Title>
                    Denim Jumpsuit
                </Title>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus placeat possimus, 
                    est ut dolorum veniam aperiam velit ullam laborum repudiandae, 
                    reprehenderit corporis inventore sapiente nostrum nesciunt dolores eius quasi a?
                </Description>
                <Price> $ 20 </Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <ColorSelector color="EB5999"></ColorSelector>
                        <ColorSelector color="E4405F"></ColorSelector>
                        <ColorSelector color="55ACEE"></ColorSelector>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <SizeOption>XS</SizeOption>
                            <SizeOption>M</SizeOption>
                            <SizeOption>L</SizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <BuyConatiner>
                    <QtyContainer>
                        <Remove></Remove>
                        <Qty>1</Qty>
                        <Add></Add>
                    </QtyContainer>
                    <Button>
                        Add To Cart
                    </Button>
                </BuyConatiner>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product