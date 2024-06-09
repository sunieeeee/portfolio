import React, {memo} from 'react';
import styled from "styled-components";
import * as colors from '../assets/style/colors';
import profileImage from "../assets/img/intro_picture.jpg";
import PageBtn from '../components/PageBtn';

const MainContainer = styled.main`
  display: flex;
  height: 100vh;

  .inner {
    display: flex;
  }

  .left_wrap {
    .box {
      position: relative;
      width: 400px;

      &::before {
        z-index: -1;
        position: absolute;
        left: 20px;
        top: 20px;
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        border: 5px solid ${colors.ORANGE};
      }

      img {
        display: block;
        width: 100%;
      }
    }
  }

  .right_wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10%;
    h3 {
      color: ${colors.WHITE};
      font-weight: 400;
      font-size: 19px;
      font-family: "Open Sans", sans-serif;
    }
    h1 {
      color: ${colors.WHITE};
      font-size: 42px;
      line-height: 42px;
      font-weight: 500;
      margin: 19px 0;

      span {
        color: ${colors.ORANGE};
        font-weight: 700;
      }
    }
    p {
      color: ${colors.WHITE};
      margin: 11px 0 28px;
      font-size: 16px;
      line-height: 32px;
      font-weight: 400;
      font-family: "Open Sans", sans-serif;
    }
    h4 {
      font-size: 23px;
      text-transform: uppercase;
      font-weight: 600;
    }
    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      margin: 23px 0 30px;

      li {
        color: ${colors.ORANGE};
        font-weight: 500;
        
        span {
          padding-right: 10px;
          color: ${colors.WHITE};
        }
      }
    }
  }
`;

const Home = memo(() => {
  return (
    <MainContainer>
      <div className="inner">
        <div className="left_wrap">
          <div className="box">
            <img src={profileImage} />
          </div>
        </div>
        <div className="right_wrap">
          <h3>HI THERE!</h3>
          <h1>
            I'M <span>LEE YEONJI</span>
          </h1>
          <p>
            안녕하세요. 저는 이연지입니다.😀<br />
            퍼블리셔로 시작한 경력을 바탕으로, 더 넓은 기술 세계에 도전하기 위해
            프론트엔드 개발자로 구직 중입니다. 현실에 안주하지 않고 새로운
            도전을 통해 끊임없이 성장하고자 합니다.
          </p>
          <h4>Introduce</h4>
          <ul>
            <li><span>Name</span>이연지</li>
            <li><span>Birth</span>1996.11.27</li>
            <li><span>Phone</span>010.2752.3965</li>
            <li><span>Address</span>서울시 구로구</li>
            <li><span>Email</span>hee396555@gmail.com</li>
          </ul>

          <PageBtn leftText="MORE" rightText="ABOUT ME" />
        </div>
      </div>
    </MainContainer>
  );
});

export default Home;