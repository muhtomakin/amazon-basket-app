import React from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector(state => state.basket.cartItems);
    const items = useSelector(state => state.basket.items);
    const filteredItems = items.filter((item) => {
        return cartItems.indexOf(item.productId) > -1 && item;
     }); 

    return (
        <div>Cart</div>
    )
}

export default Cart