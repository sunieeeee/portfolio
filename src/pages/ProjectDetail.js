import React, { memo , useState, useEffect} from "react";
import styled from "styled-components";
import {useParams} from 'react-router-dom';

import * as colors from "../assets/style/colors";
import PageTitle from "../components/PageTitle";
import SubTitle from "../components/SubTitle";
import PageBtn from "../components/PageBtn";
import dataset from "../assets/dataset";

const DetailContainer = styled.div`
  > div:not(.detail) {
    padding-bottom: 25px;
    > h2 {
      text-align: left;
    }

    > h3 {
      position: relative;
      padding-left: 20px;
      text-align: left;
      opacity: 0.9;

      &::before {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        content: "";
        display: inline-block;
        margin-right: 10px;
        width: 4px;
        height: 23px;
        background-color: #fff;
      }
    }
  }

  .detail {
    margin-top: 50px;

    h3 {
      margin-bottom: 17px;
      font-size: 32px;
      font-weight: 700;
    }

    p {
      line-height: 1.6;
    }

    ul li {
      display: flex;
      margin-bottom: 6px;
      line-height: 1.5;

      b {
        display: inline-block;
        min-width: 3.3%;
        /* padding-right: 20px; */

        i {
          color: ${colors.ORANGE};
        }
      }

      .tech_stack {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;

        li {
          font-size: 14px;
          padding: 2px 7px;
          border: 1.5px solid #7e7e7e;
          border-radius: 4px;
        }
      }
    }
  }

  .detail_btn {
    display: flex;
    gap: 20px;

    .btn_inner {
      .left {
        color: ${colors.ORANGE};

        &::after {
          color: ${colors.WHITE};
        }
      }
      .right {
        color: ${colors.WHITE};

        &::after {
          color: ${colors.ORANGE};
        }
      }
    }
  }
`;

const ProjectDetail = memo(() => {
  const {title} = useParams();
  console.log(title);

  const projectItem = dataset.projects.find(v => v.title === title);
  console.log(projectItem.view);

  return (
    <article>
      <DetailContainer className="inner">
        <PageTitle rightText={projectItem.title} contentText="Projects" />
        <SubTitle text={projectItem.sub_title} border="none" />

        <div className="detail">
          <h3>OverView.</h3>
          {projectItem.desc.map((v, i) => (
            <p key={i}>{v}</p>
          ))}
        </div>

        <div className="detail">
          <h3>WorkInfo.</h3>
          <ul>
            <li>
              <b>
                <i className="fa-solid fa-user"></i>
              </b>
              100%
            </li>
            <li>
              <b>
                <i className="fa-solid fa-hourglass"></i>
              </b>
              {projectItem.period}
            </li>
            <li>
              <b>
                <i className="fa-solid fa-layer-group"></i>
              </b>
              {projectItem.work_area}
            </li>
            <li>
              <b>
                <i className="fa-solid fa-screwdriver-wrench"></i>
              </b>
              <ul className="tech_stack">
                {projectItem.tech.map((v, i) => (<li key={i}>{v}</li>))}
              </ul>
            </li>
          </ul>
        </div>

        <div className="detail detail_btn">
          <PageBtn link={projectItem.link} leftText="PROJECT" rightText=": LINK"/>
          <PageBtn link={projectItem.github} leftText="GITHUB" rightText=": LINK" />
        </div>

        <ul className="detail_view">
            <li>
              <h5>💡 {projectItem.view.map((v, i) => {v})}</h5>
              <p></p>
            </li>
        </ul>
      </DetailContainer>
    </article>
  );
});

export default ProjectDetail;
