import React, {memo} from 'react';
import styled from "styled-components";
import * as colors from "../assets/style/colors";
import mq from "../components/MediaQuery";
import Meta from '../components/Meta';
import PageTitle from '../components/PageTitle';
import SubTitle from "../components/SubTitle";
import dataset from "../assets/dataset";

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  ${mq.maxWidth("lg")`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${mq.maxWidth("sm")`
    grid-template-columns: repeat(1, 1fr);
  `}

  .box {
    position: relative;
    padding: 20px 28px;
    min-height: 280px;
    border-radius: 5px;
    border: 1px solid #252525;

    ${mq.maxWidth("sm")`
      min-height: 230px;
    `}

    &:hover::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 0;
      height: 0;
      border-top: 1px solid ${colors.ORANGE};
      border-right: 1px solid ${colors.ORANGE};
      border-radius: 5px;
      animation: border-top-right 0.5s 1 forwards;
    }
    &:hover::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      width: 0;
      height: 0;
      border-bottom: 1px solid ${colors.ORANGE};
      border-left: 1px solid ${colors.ORANGE};
      border-radius: 5px;
      animation: border-bottom-left 0.5s 1 forwards;
    }

    @keyframes border-top-right {
      0% {
        width: 0px;
        height: 0px;
      }
      25% {
        width: calc(100% - 1px);
        height: 0px;
      }
      50% {
        width: calc(100% - 1px);
        height: calc(100% - 1px);
      }
      100% {
        width: calc(100% - 1px);
        height: calc(100% - 1px);
      }
    }
    @keyframes border-bottom-left {
      0% {
        width: 0px;
        height: 0px;
        opacity: 0;
      }
      50% {
        width: 0px;
        height: 0px;
        opacity: 0;
      }
      50.1% {
        width: 0px;
        height: 0px;
        opacity: 1;
      }
      75% {
        width: calc(100% - 1px);
        height: 0px;
        opacity: 1;
      }
      100% {
        width: calc(100% - 1px);
        height: calc(100% - 1px);
        opacity: 1;
      }
    }
  }

  h4 {
    display: flex;
    align-items: center;
    gap: 10px;
    text-transform: uppercase;

    i {
      font-size: 37px;
      color: ${colors.ORANGE};
    }
  }

  ul {
    li {
      position: relative;
      padding: 12px 0 0 30px;
      font-size: 14.5px;
      line-height: 1.6;
      &::before {
        position: absolute;
        left: 0;
        top: 30px;
        content: "";
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

  ${mq.maxWidth("md")`
      flex-direction: column;
    `}
  .content {
    width: 50%;

    ${mq.maxWidth("md")`
      width: 100%;
    `}
  }

  ul {
    li {
      display: flex;
      justify-content: space-between;
      padding-bottom: 50px;

      .box {
        max-width: 92%;
        width: 100%;

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
      <Meta title="leeyeonji : About" />
      <PageTitle leftText="About" rightText="Me" contentText="About Me" />

      <section>
        <SubTitle text="MY SKILLS" border="none" />
        <SkillsContainer>
          {dataset &&
            dataset.skills &&
            dataset.skills.map((v, i) => {
              return (
                <div className="box" key={i}>
                  <h4>
                    <i className={v.icon}></i>
                    {v.title}
                  </h4>
                  <ul>
                    {v.desc &&
                      v.desc.map((desc, idx) => {
                        return <li key={idx}>{desc}</li>;
                      })}
                  </ul>
                </div>
              );
            })}
        </SkillsContainer>
      </section>

      <section>
        <SubTitle text="EXPERIENCE & EDUCATION" />
        <CareerContainer>
          <div className="content">
            <ul>
              {dataset.experience.map((v, i) => {
                return (
                  <li key={i}>
                    <div className="bullet_wrap">
                      <span className="bullet"></span>
                    </div>
                    <div className="box">
                      <span className="time">
                        <i className="fa-solid fa-calendar-days"></i>
                        {v.period}
                      </span>
                      <h5 className="career_title">
                        {v.name} <span>- {v.position}</span>
                      </h5>
                      <p className="career_txt">
                        {v.desc.map((desc, idx) => {
                          return <span key={idx}>{desc}</span>;
                        })}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="content">
            <ul>
              {dataset.education.map((v, i) => {
                return (
                  <li key={i}>
                    <div className="bullet_wrap">
                      <span className="bullet"></span>
                    </div>
                    <div className="box">
                      <span className="time">
                        <i className="fa-solid fa-calendar-days"></i>
                        {v.period}
                      </span>
                      <h5 className="career_title">
                        {v.name} <span>- {v.position}</span>
                      </h5>
                      <p className="career_txt">
                        {v.desc.map((desc, idx) => {
                          return <span key={idx}>{desc}</span>;
                        })}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </CareerContainer>
      </section>
    </div>
  );
});

export default About;