import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import image_01 from '../assets/images/image_01.png';
import PrimaryButton from '../components/button';


const H2 = styled.h2`
    font-size: 25px;
    font-family: ${({theme}) => theme.fonts.bold};
    text-align: left;
    color: ${({Green}) => Green ? '#00D563' : '#121212' };
    margin-bottom: ${({Green}) => Green ? '55px' : '' };

    ${({ theme }) => theme.media.desktop} {
        font-size: 30px;
        margin-bottom: ${({Green}) => Green ? '75px' : '' };
    }
`;

const H3 = styled.h3`
    font-size: 16px;
    font-family: ${({theme}) => theme.fonts.bold};
    text-align: left;
    color: ${({theme}) => theme.colors.black};
    padding-bottom: 14px;
    margin-bottom: 14px;
`;

const ImageContainer = styled.div`
    width: 100%;
    display: block;
    height: 100%;
    min-height: 293px;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${image_01});

    ${({theme}) => theme.media.tablet} {
        min-height: 456px;
    }

    ${({theme}) => theme.media.desktop} {
        min-height: 656px;
    }
`;

const Paragraph = styled.p`
    font-size: 14px;
    font-family: ${({theme}) => theme.fonts.regular};
    letter-spacing: 0;
    line-height: 24px;
    text-align: left;
    margin-bottom: 60px;
    color: ${({theme}) => theme.colors.textGray};
`;


const Inner = styled.div`
  background: ${({ theme }) => theme.colors.lightGray};
  width: 100%;
  padding-left: 15px;
  margin: 50px auto;
  opacity: 1;
  max-width: 540px;

  ${({ theme }) => theme.media.tablet} {
    max-width: 720px;
  }

  ${({ theme }) => theme.media.desktop} {
    margin: 100px 0 0 113px;
    max-width: 450px;
  }
`;

const BigPictureRow = () => {
    return ( 
        <Row>
            <Col lg={6} className='leftColumn'>
                <ImageContainer/>
            </Col>
            <Col lg={6} className='rightColumn'>
                <Inner>
                    <H2>Flutter for reaching both</H2>
                    <H2 Green>iOS and Android users</H2>
                    <H3>Customizable UI widgets</H3>
                    <Paragraph>
                    Collaborating with Netguru had lasting impact on our ability to be innovative, and execute at pace. The team there have a strong focus on not just doing what you ask.
                    </Paragraph>
                    <PrimaryButton>Read Case Study</PrimaryButton>
                </Inner>
            </Col>
        </Row>
     );
}
 
export default BigPictureRow;