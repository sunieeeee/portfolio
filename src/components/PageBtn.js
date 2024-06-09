import React from "react";
import styled from "styled-components";
import * as colors from "../assets/style/colors";

const BtnContainer = styled.a`
  display: block;
  padding: 17px 20px;
  width: fit-content;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.5px;
  font-size: 15px;
  font-weight: 600;
  border: 2px solid ${colors.ORANGE};
  border-radius: 80px;
  cursor: pointer;
    
  .btn_inner {
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  
  .btn_inner {
    width: 100%;
    height: 100%;
  }

  .left {
    position: relative;
    padding-right: 6px;
    color: ${colors.WHITE};
    transition: 0.2s all;

    &::after {
      content: "${(props) => props.$leftText}";
      position: absolute;
      left: 0;
      bottom: 105%;
      color: ${colors.ORANGE};
    }
  }
  
  .right {
    position: relative;
    color: ${colors.ORANGE};
    transition: 0.2s all;
    
    &::after {
      content: "${(props) => props.$rightText}";
      position: absolute;
      right: 0;
      top: 105%;
      color: ${colors.WHITE};
    }
  }
  &:hover {
    .left {
      transform: translate3d(0, 105%, 0);  
    }
    .right {
      transform: translate3d(0, -105%, 0);
    }
  }
`;

const PageBtn = ({ leftText, rightText }) => (
  <BtnContainer href="/about" $leftText={leftText} $rightText={rightText}>
    <div className="btn_inner">
      <span className="left">{leftText}</span>
      <span className="right">{rightText}</span>
    </div>
  </BtnContainer>
);

export default PageBtn;
