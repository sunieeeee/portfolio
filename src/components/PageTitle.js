import React, { memo } from "react";
import styled from "styled-components";
import * as colors from "../assets/style/colors";
import mq from "../components/MediaQuery";

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
      animation: titleOn 0.8s 1 forwards;

      ${mq.maxWidth("md")`
        font-size: 6rem;
        left: 50%;
        right: auto;
        transform: translate(-50%, -50%);
        text-align: center;
      `}
      ${mq.maxWidth("sm")`
        display: none
      `}
    }

    span {
      color: ${colors.ORANGE};
    }

    @keyframes titleOn {
      0% {
        letter-spacing: 50px;
      }
      100% {
        letter-spacing: 10px;
      }
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