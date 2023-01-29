import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CartItem from './CartItem';

const BasketProducts = () => {
    const cartItems = useSelector(state => state.basket.cartItems);

    return (
        <Container>
            <Title>Shopping Cart</Title>
            <hr />
            <ItemsContainer>
                {
                    cartItems?.map((item)=>(
                        <CartItem 
                            key={item.productId}
                            id={item.productId}
                            item={item}
                        />
                    ))
                }
            </ItemsContainer>
        </Container>
    )
}

export default BasketProducts

const Container = styled.div`
    flex: 0.8;
    padding: 20px;
    margin-right: 18px;
    background-color: white;
`;

const Title = styled.h1`
    margin-bottom: 8px;
`;

const ItemsContainer = styled.div`
`;