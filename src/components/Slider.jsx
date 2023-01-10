import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import React, {  useState } from "react";
import styled from 'styled-components';
import {sliderItems} from '../data';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ebe0e0;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props=> props.direction === "left" && "10px"};
    right:  ${props=> props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 50%;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition : all 1.5s ease;
    transform: translateX(${(props)=>props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.background};
`;

const ImgContainer = styled.div`
    flex:1;
    height: 100%;    
`;

const Image = styled.img`
    height: 80%;
`;

const InfoContainer = styled.div`
    flex:1;  
    padding:50px;
`;
 
const Title = styled.h1`
    font-size: 70px;
`;
const Info = styled.p`
    margin: 40px 0;
    font-size: 30px;
    font-weight: 60;
`;

const Button = styled.button`
    font-size:20px;
    width: 150px;
    height: 50px;
    font-weight: 30;
    background: none;
`;

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    };

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeft />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item)=>(
            <Slide background={item.bg} key={item.id}>
                <ImgContainer>
                    <Image src={item.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Info>{item.desc}</Info>
                    <Button>Shop NOW</Button>
                </InfoContainer>
            </Slide>    
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRight />
        </Arrow>
    </Container>
  )
}

export default Slider