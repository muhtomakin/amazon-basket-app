import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import BasketProducts from './BasketProducts';
import CartTotal from './CartTotal';

const Cart = () => {
    const cartItems = useSelector(state => state.basket.cartItems);

    if(cartItems.length === 0) {
        return (
            <h1>There is no item in your basket!</h1>
        )
    }

    return (
        <Container>
            <BasketProducts />
            <CartTotal />
        </Container>
    )
}

export default Cart

const Container = styled.div`
    display: flex;
    //TRouBLe
    padding: 14px 18px 0 18px;
    align-items: flex-start;
`;