import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed; // Make it fixed position
    bottom: 0;
    height: fit-content;
    padding: 10px;
    background-color: black;
    text-align: right;
    width: 100%;
    z-index: 1000; // High value to ensure it's on top

    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`;

const Text = styled.p`
    color: rgb(210, 212, 199);
    font-size: 18px;
    padding-right: 25px;

    @media only screen and (max-width: 768px) {
        padding-right: 0px;
    }
`;

const Copyright = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Container>
            <Text>© Emily Zhou {currentYear}</Text>
        </Container>
    );
}

export default Copyright;
