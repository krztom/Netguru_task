import React, { Component } from "react";
import { Link } from "react-scroll";
import styled from 'styled-components';
import Sticky from 'react-sticky-el';

const Inner = styled.div `
    display: flex;
    justify-content: flex-end;
    height: 100%;
`

const NavContainer = styled.section `
    top: 0;
    position: sticky;
    width: 100%;
    text-align: center;
    display: block;

    ${({ theme }) => theme.media.desktop} {
        border: 1px solid ${({theme}) => theme.colors.gray};
        padding: 45px 50px;
        min-width: 304px;
        text-align: left;
        max-height: 281px;
    }
`

const H4 = styled.h4 `
    font-size: 20px;
    font-family: ${({theme}) => theme.fonts.bold};
    letter-spacing: 0;
    line-height: 28px;
    text-align: left;
    color: ${({theme}) => theme.colors.darkBlack};
    margin-bottom: 20px;

    ${({ theme }) => theme.media.desktop} {
        margin-bottom: 40px;
    }
`
const NavList= styled.ul `
    list-style: none;
    padding: 15px 0;
    display: flex;
    justify-content: space-evenly;
    background: ${({theme}) => theme.colors.white};

    ${({ theme }) => theme.media.desktop} {
        display: block;
        padding: 0;
    }
`

const NavItem= styled.li `
    font-size: 14px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.black};
    margin-bottom: 20px;
    cursor: pointer;
`
export default class Navigation extends Component {
    constructor(props) {
		super(props);
		this.state = {};
	}

  
    render() {
    return (
      <Inner>
        <NavContainer>
        <Sticky>
          <H4>Contents</H4>
            <NavList>
              <NavItem>
                <Link
                  activeClass="active"
                  to="section1"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={800}
                >
                  Technology overview
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  activeClass="active"
                  to="section2"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={800}
                >
                  Good for research…
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  activeClass="active"
                  to="section3"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={800}
                >
                  …perfect for Startups.
                </Link>
              </NavItem>
            </NavList>
          </Sticky>
        </NavContainer>
      </Inner>
    );
  };
};
   


