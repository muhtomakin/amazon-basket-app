import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDatasAsync } from '../redux/services';
import Product from './Product';
import Loading from './Loading';

const Main = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.basket.items);
    const isLoading = useSelector(state => state.basket.isLoading);

    console.log(items);

    React.useEffect(() => {
        if(items.length === 0) {
            dispatch(getDatasAsync());
        }
    }, [dispatch]);

    if(isLoading) {
        return (
            <Loading />
        );
    }

    return (
        <Container>
            <Banner>
            </Banner>
            <Link to='/cart'>Cart</Link>  
            <Content>
                {items.map((data)=>(
                        <Product key={data.productId}
                            data={data}
                        />
                    ))
                }
            </Content>
        </Container>
    )
}

export default Main

const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
`;

const Banner = styled.div`
    background-image: url('https://i.imgur.com/SYHeuYM.jpg');
    min-height: 600px;
    background-position: center;
    background-size: cover;
    z-index: 1;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const Content = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    margin-top: -350px;
    display: flex;
`;