import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: fit-content;
    padding: 10px;
    background-color: black;
    text-align: left;
    width: 100%;
    z-index: 1000; // High value to ensure it's on top
    position: fixed; // Make it fixed position
    bottom: 0;
`;

const Text = styled.p`
    color: rgb(210, 212, 199);
    font-size: 18px;
`;

const Copyright = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Container>
            <Text>© {currentYear} Emily Zhou</Text>
        </Container>
    );
}

export default Copyright;
