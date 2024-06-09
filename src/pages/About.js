import React, {memo} from 'react';
import styled from "styled-components";
import * as colors from "../assets/style/colors";
import PageTitle from '../components/PageTitle';
import SubTitle from "../components/SubTitle";

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  .box {
    padding: 20px 30px 25px 40px;
    border-radius: 5px;
    border: 1px solid #252525;
  }

  h4 {
    display: flex;
    align-items: center;
    gap: 10px;
    text-transform: uppercase;
    
    i {
      font-size: 40px;
      color: ${colors.ORANGE};
    }
  }

  ul {
    li {
      position: relative;
      padding: 15px 0 0 30px;
      font-size: 14.5px;
      line-height: 1.6; 
      &::before {
        position: absolute;
        left: 0;
        top: 30px;
        content: '';
        width: 10px;
        height: 1px;
        background-color: ${colors.ORANGE};
      }
    }
  }
`;

const CareerContainer = styled.div`
  display: flex;
  gap: 60px;

  ul {
    li {
      display: flex;
      justify-content: space-between;
      padding-bottom: 50px;

      .box {
        max-width: 92%;

        .time {
          font-size: 14px;
          opacity: 0.8;
          font-weight: 400;
          font-family: "Open Sans", sans-serif;

          i {
            padding-right: 10px;
          }
        }

        .career_title {
          margin: 18px 0 13px;
          font-size: 18px;
          font-weight: 400;

          span {
            color: #666;
          }
        }

        .career_txt {
          font-family: "Open Sans", sans-serif;
          font-size: 14px;
          line-height: 1.8;
        }
      }

      .bullet_wrap {
        position: relative;

        .bullet {
          display: block;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background-color: ${colors.BLACK};
          border: 2px solid ${colors.ORANGE};

          &::after {
            z-index: -1;
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
            content: "";
            display: block;
            width: 1px;
            height: calc(100% + 50px);
            background-color: ${colors.ORANGE};
          }
        }
      }

      &:last-of-type .bullet_wrap .bullet::after {
        height: 100%;
      }
    }
  }
`;

const About = memo(() => {
  return (
    <div className="inner">
      <PageTitle leftText="About" rightText="Me" contentText="About Me" />

      <section>
        <SubTitle text="MY SKILLS" border="none" />
        <SkillsContainer>
          <div className="box">
            <h4>
              <i class="fa-solid fa-code"></i>
              html
            </h4>
            <ul>
              <li>
                웹 표준과 웹 접근성을 준수하는 HTML 정보 구조설계로 웹 사이트
                퍼블리싱을 해오고 있습니다.
              </li>
              <li>
                웹 표준과 웹 접근성을 준수하는 HTML 정보 구조설계로 웹 사이트
                퍼블리싱을 해오고 있습니다.
              </li>
              <li>
                웹 표준과 웹 접근성을 준수하는 HTML 정보 구조설계로 웹 사이트
                퍼블리싱을 해오고 있습니다.
              </li>
            </ul>
          </div>
          <div className="box">
            <h4>
              <i class="fa-solid fa-code"></i>
              html
            </h4>
            <ul>
              <li>
                웹 표준과 웹 접근성을 준수하는 HTML 정보 구조설계로 웹 사이트
                퍼블리싱을 해오고 있습니다.
              </li>
              <li>
                웹 표준과 웹 접근성을 준수하는 HTML 정보 구조설계로 웹 사이트
                퍼블리싱을 해오고 있습니다.
              </li>
              <li>
                웹 표준과 웹 접근성을 준수하는 HTML 정보 구조설계로 웹 사이트
                퍼블리싱을 해오고 있습니다.
              </li>
            </ul>
          </div>
          <div className="box">
            <h4>
              <i class="fa-solid fa-code"></i>
              html
            </h4>
            <ul>
              <li>
                웹 표준과 웹 접근성을 준수하는 HTML 정보 구조설계로 웹 사이트
                퍼블리싱을 해오고 있습니다.
              </li>
              <li>
                웹 표준과 웹 접근성을 준수하는 HTML 정보 구조설계로 웹 사이트
                퍼블리싱을 해오고 있습니다.
              </li>
              <li>
                웹 표준과 웹 접근성을 준수하는 HTML 정보 구조설계로 웹 사이트
                퍼블리싱을 해오고 있습니다.
              </li>
            </ul>
          </div>
        </SkillsContainer>
      </section>

      <section>
        <SubTitle text="EXPERIENCE & EDUCATION" />
        <CareerContainer>
          <div className="content">
            <ul>
              <li>
                <div className="bullet_wrap">
                  <span className="bullet"></span>
                </div>
                <div className="box">
                  <span className="time">
                    <i class="fa-solid fa-calendar-days"></i>
                    2001 - 2005
                  </span>
                  <h5 className="career_title">
                    루미오 <span>- PUBLISHER</span>
                  </h5>
                  <p className="career_txt">
                    솔루션 회사인 루미오에서 퍼블리싱 작업을 담당하였습니다.
                    솔루션 회사인 루미오에서 퍼블리싱 작업을 담당하였습니다.솔루션
                    회사인 루미오에서 퍼블리싱 작업을 담당하였습니다. 솔루션
                    회사인 루미오에서 퍼블리싱 작업을 담당하였습니다.
                  </p>
                </div>
              </li>
              <li>
                <div className="bullet_wrap">
                  <span className="bullet"></span>
                </div>
                <div className="box">
                  <span className="time">
                    <i class="fa-solid fa-calendar-days"></i>
                    2001 - 2005
                  </span>
                  <h5 className="career_title">
                    루미오 <span>- PUBLISHER</span>
                  </h5>
                  <p className="career_txt">
                    솔루션 회사인 루미오에서 퍼블리싱 작업을 담당하였습니다.
                    솔루션 회사인 루미오에서 퍼블리싱 작업을 담당하였습니다.솔루션
                    회사인 루미오에서 퍼블리싱 작업을 담당하였습니다. 솔루션
                    회사인 루미오에서 퍼블리싱 작업을 담당하였습니다.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="content">
            <ul>
              <li>
                <div className="bullet_wrap">
                  <span className="bullet"></span>
                </div>
                <div className="box">
                  <span className="time">
                    <i class="fa-solid fa-calendar-days"></i>
                    2001 - 2005
                  </span>
                  <h5 className="career_title">
                    루미오 <span>- PUBLISHER</span>
                  </h5>
                  <p className="career_txt">
                    솔루션 회사인 루미오에서 퍼블리싱 작업을 담당하였습니다.
                    솔루션 회사인 루미오에서 퍼블리싱 작업을 담당하였습니다.솔루션
                    회사인 루미오에서 퍼블리싱 작업을 담당하였습니다. 솔루션
                    회사인 루미오에서 퍼블리싱 작업을 담당하였습니다.
                  </p>
                </div>
              </li>
              <li>
                <div className="bullet_wrap">
                  <span className="bullet"></span>
                </div>
                <div className="box">
                  <span className="time">
                    <i class="fa-solid fa-calendar-days"></i>
                    2001 - 2005
                  </span>
                  <h5 className="career_title">
                    루미오 <span>- PUBLISHER</span>
                  </h5>
                  <p className="career_txt">
                    솔루션 회사인 루미오에서 퍼블리싱 작업을 담당하였습니다.
                    솔루션 회사인 루미오에서 퍼블리싱 작업을 담당하였습니다.솔루션
                    회사인 루미오에서 퍼블리싱 작업을 담당하였습니다. 솔루션
                    회사인 루미오에서 퍼블리싱 작업을 담당하였습니다.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </CareerContainer>
      </section>
    </div>
  );
});

export default About;