import React, {memo} from 'react';
import styled from "styled-components";
import * as colors from "../assets/style/colors";

const SubTitleContainer = styled.div`
  margin-bottom: 40px;

  &:not(.none)::before {
      content: "";
      display: block;
      margin: 0 auto 55px;
      max-width: 40%;
      height: 1px;
      background-color: #252525;
  }

  h3 {
    font-size: 26px;
    font-weight: 600;
    text-align: center;
  }
`;

const SubTitle = memo(({text, border}) => {
  return (
    <SubTitleContainer className={border}>
      <h3>{text}</h3>
    </SubTitleContainer>
  )
});

export default SubTitle;