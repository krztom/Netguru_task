import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Container } from 'react-bootstrap';
import { theme } from '../utils/theme';
import BigPictureRow from '../sections/BigPictureRow';


const GlobalStyle = createGlobalStyle`
    body {
      padding: 0;
      margin: 0;
    }
    *, *::before, *::after {
        box-sizing: border-box;
    }
` ;

export const Layout = (props) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle/>
            <BigPictureRow/>
            <Container>
                {props.children}
            </Container>
        </>
    </ThemeProvider>
    )