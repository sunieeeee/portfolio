import React, { memo } from "react";
import styled from "styled-components";
import * as colors from "../assets/style/colors";

const PageTitleContainer = styled.div`
  padding: 80px 0;
  color: ${colors.WHITE};
  font-size: 55px;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;

  h2 {
    position: relative;
    &::before {
      content: "${(props) => props.$contentText}";
      color: #fff;
      opacity: 0.3;
      font-size: 110px;
      left: 0;
      letter-spacing: 10px;
      position: absolute;
      right: 0;
      font-weight: 800;
      top: 50%;
      transform: translateY(-50%);
      color: rgba(255, 255, 255, 0.07);
      z-index: -1;
    }

    span {
      color: ${colors.ORANGE};
    }
  }
`;   

const PageTitle = memo(({leftText, rightText, contentText}) => {
  return (
    <PageTitleContainer $contentText={contentText}>
        <h2>{leftText} <span>{rightText}</span></h2>
    </PageTitleContainer>
  )
});

export default PageTitle;