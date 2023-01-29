import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { NumericFormat } from 'react-number-format';

const getCount = (cartItems) => {
    let count = 0;
    cartItems.map(item => count += item.quantity);
    return count;
}

const getTotalPrice = (cartItems, basketItems) => {
    let totalPrice = 0;
    basketItems.map(basketItem => {
        cartItems.find(cartItem => {
            if(cartItem.id === basketItem.productId) {
                totalPrice += cartItem.quantity * basketItem.price;
            }
        })
    })
    return totalPrice;
}

function CartTotal() {
    const cartItems = useSelector(state => state.basket.cartItems);
    const basketItems = useSelector(state => state.basket.basketItems);
    console.log(cartItems);

    console.log(basketItems);

    

    return (
        <Container>
            <Subtotal>Subtotal ({getCount(cartItems)} items): 
                <NumericFormat value={getTotalPrice(cartItems, basketItems)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </Subtotal>
            <CheckoutButton>Proceed to checkout</CheckoutButton>
        </Container>
    )
}

export default CartTotal

const Container = styled.div`
    flex: 0.3;
    padding: 20px;
    background-color: white;
`;

const Subtotal = styled.h2`
    margin-bottom: 16px;
`;

const CheckoutButton = styled.button`
    background-color: #f0c14b;
    width: 100%;
    // vertical - horizontal
    padding: 4px 8px;
    border: 2px solid #a88734;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover {
        background:  #ddb347;
    }
`;