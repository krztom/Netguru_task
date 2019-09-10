import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import Navigation from '../components/navigation';
import PostSection from '../components/postSection';

const Section = styled.section`
  margin: 50px auto;

  ${({ theme }) => theme.media.desktop} {
    margin-top: 95px;
    padding: 48px 0 10px;
    margin-bottom: 400px;
  }
`;

const Content = styled.p`
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.textGray};
    line-height: 30px;
    margin-bottom: ${({First}) => First ? '26px' : '16px' };
`;

const GreenText = styled.span `
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.primaryGreen};
    line-height: 30px;
`;

const BoldText = styled.span `
  font-family: ${({ theme }) => theme.fonts.bold};
`


const PostsRow = () => {
  return (
    <Section>
      <Row>
        <Col lg={7} className="desktopNav">
          <PostSection title="Technology overview" id="section1">
            <Content First>
              Python is gaining a lot of popularity among{" "}
              <GreenText>Fintech</GreenText>, startups, cloud computing
              technology companies as well as data analytics projects,{" "}
              <BoldText>Machine Learning, and Internet of Things.</BoldText>{" "}
              Python allows for rapid app development.
            </Content>
            <Content>
              Python’s syntax is clear and elegant, and the programming language
              is object-oriented. Still, Python is considered as a{" "}
              <BoldText>high-level and general-purpose</BoldText> programming
              language used not only for enhanced web development but also{" "}
              <GreenText>simple web applications.</GreenText>
            </Content>
          </PostSection>
          <PostSection title="Good for research…" id="section2">
            <Content First>
              Python is gaining a lot of popularity among{" "}
              <GreenText>Fintech</GreenText>, startups, cloud computing
              technology companies as well as data analytics projects,{" "}
              <BoldText>Machine Learning, and Internet of Things.</BoldText>{" "}
              Python allows for rapid app development.
            </Content>
            <Content>
              Python’s syntax is clear and elegant, and the programming language
              is object-oriented. Still, Python is considered as a{" "}
              <BoldText>high-level and general-purpose</BoldText> programming
              language used not only for enhanced web development but also{" "}
              <GreenText>simple web applications.</GreenText>
            </Content>
          </PostSection>
          <PostSection title="…perfect for Startups." id="section3">
            <Content First>
              The simplicity of Python means that not only is it easy to
              maintain, but it can also handle quick growth. What’s more, if you
              use the <GreenText>Django framework</GreenText> – the most popular framework for Python –
              you will also put yourself in good stead to scale. This is because
              the components that make up Django are decoupled (i.e. independent
              from one another), which means that they can be chopped, changed,
              removed, and replaced as and <BoldText>when your project requires larger or
              more specific solutions.</BoldText>
            </Content>
          </PostSection>
        </Col>
        <Col lg={5}>
          <Navigation />
        </Col>
      </Row>
    </Section>
  );
};
 
export default PostsRow;