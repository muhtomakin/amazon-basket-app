import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addToCart } from '../redux/basketSlice';

const Product = ({data}) => {
    const dispatch = useDispatch();
    
    const handleClick = (id) => {
        dispatch(addToCart(id));
    }

    return (
        <Container>
            <Title>
                {data.name}
            </Title>
            <Price>
                ${data.price}
            </Price>
            <Image src={data.thumbnail} />
            <ActionSection>
                <AddToCartButton
                    onClick={() => handleClick(data.productId)}
                >
                    Add to Cart
                </AddToCartButton>
            </ActionSection>
        </Container>
  )
}

export default Product

const Container = styled.div`
    background-color: white;
    z-index: 100;
    flex: 1;
    padding: 20px;
    margin: 10px;
    max-height: 400px;
    display: flex;
    flex-direction: column;
`
const Title = styled.span``;

const Price = styled.span`
    font-weight: 500;
    margin-top: 3px;
`;

const Rating = styled.div`
    display: flex;
`;

const Image = styled.img`
    max-height: 200px;
    object-fit: contain;
`;

const ActionSection = styled.div`
    margin-top: 12px;
    display: grid;
    place-items: center;
`;

const AddToCartButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
    cursor: pointer;
`;