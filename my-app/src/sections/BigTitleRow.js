import React from 'react';
import styled, { css } from 'styled-components';
import { Col, Row } from 'react-bootstrap';

const Section = styled.section`
  margin-top: 55px;

    ${({ theme }) => theme.media.desktop} {
      margin-top: 90px;
      padding: 48px 0 10px;
    }
`;

const H1 = styled.h1`
  font-size: 25px;
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: left;
  line-height: 30px;
  color: ${({ Green }) => (Green ? "#00D563" : "#121212")};
  position: relative;
  z-index: 1;
  ${({ First }) =>
    First &&
    css`
      ::before {
        content: "01";
        display: block;
        position: absolute;
        left: -20px;
        font-size: 100px;
        color: ${({theme}) => theme.colors.lightGray};
        z-index: -1;

        ${({ theme }) => theme.media.desktop} {
          left: -76px;
        }
      }
    `};

  ${({ theme }) => theme.media.desktop} {
    font-size: 36px;
    line-height: 52px;
  }
`;


const Paragraph = styled.p`
    font-size: 16px;
    font-family: ${({theme}) => theme.fonts.regular};
    letter-spacing: 0;
    line-height: 28px;
    text-align: left;
    color: ${({theme}) => theme.colors.textGray};
    margin-top: 14px;

    ${({ theme }) => theme.media.desktop} {
      margin-left: -15px;
    }
`;


const BigTitleRow = () => {
  return (
    <Section>
      <Row>
        <Col lg={6}>
          <H1 First>Cross-platform mobile</H1>
          <H1>app development</H1>
          <H1 Green>made easy</H1>
        </Col>
        <Col lg={6}>
          <Paragraph>
            Flutter is Google's mobile app software development kit (SDK) made
            to build cross-platform applications. It's a complete environment
            with a framework, widgets, and tools, which gives you the
            opportunity to develop mobile apps efficiently.
          </Paragraph>
        </Col>
      </Row>
    </Section>
  );
};
 
export default BigTitleRow;