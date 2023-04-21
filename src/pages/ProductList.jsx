import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';


const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
    `;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
    `;

const Filter = styled.div``;

const FilterText = styled.span`
    margin-right: 20px;
`;

const Select = styled.select`
    margin-right: 20px;
    padding: 10px; 
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>
            Dresses
        </Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>
                        Color
                    </Option>
                    <Option>Red</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Green</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>  
                </Select>
                <Select>
                    <Option disabled selected>
                        Size
                    </Option>
                    <Option>X-Small</Option>
                    <Option>Small</Option>
                    <Option>Medium</Option>
                    <Option>Large</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>  
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option  selected>
                        Newest
                    </Option>
                    <Option>Price (Asc)</Option>
                    <Option>Price (Dsc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList