import React from "react";
import styled from 'styled-components';

const SectionContent = styled.div `
  margin-bottom: 44px;
`
const H3 = styled.h3 `
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.darkBlack};
  margin-bottom: 36px;
`


const PostSection = (props) => {
  return (
    <SectionContent id={props.id}>
      <H3>{props.title}</H3>
      {props.children}
    </SectionContent>
  )
}

export default PostSection;
