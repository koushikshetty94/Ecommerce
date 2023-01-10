import React from 'react';
import CategoryItem from './CategoryItem';
import {categories} from '../data';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    padding:10px;
`;

const Categories = () => {
  return (
    <Container>
        {categories.map(item=> <CategoryItem item={item}/> )}
    </Container>
  )
}

export default Categories