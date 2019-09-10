import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    padding: 15px 42px;
    font-size: 14px;
    font-family: ${({theme}) => theme.fonts.bold};
    text-align: center;
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.primaryGreen};
    border: 0;
    border-radius: 50px;
    box-shadow: 0px 28px 40px #00000024;
`;  


const PrimaryButton = (props) => {
    return ( 
        <Button>{props.children}</Button>
     );
}
 
export default PrimaryButton;