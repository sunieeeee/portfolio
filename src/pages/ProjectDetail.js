import React, { memo , useState, useEffect} from "react";
import styled from "styled-components";
import {useParams} from 'react-router-dom';

import * as colors from "../assets/style/colors";
import mq from '../components/MediaQuery';
import Meta from "../components/Meta";
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
        top: 2px;
        content: "";
        display: inline-block;
        margin-right: 10px;
        width: 4px;
        height: 21px;
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

        ${mq.maxWidth("lg")`
          min-width: 1.7rem;
        `}
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

    ${mq.maxWidth("md")`
        flex-direction: column;
    `}
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

  .detail_view {
    li {
      margin-bottom: 50px;

      &:last-of-type {
        margin-bottom: 80px;
      }

      .view_title {
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: 600;
      }

      .view_desc {
        font-size: 16px;
      }
      .view_img {
        display: block;
        margin-top: 10px;
        width: 100%;
        object-fit: cover;
      }
      .view_mo {
        margin-top: 10px;
        max-width: 400px;
        width: 100%;
        object-fit: cover;
      }
    }
  }
`;

const ProjectDetail = memo(() => {
  const {title} = useParams();
  console.log(title);

  const projectItem = dataset.projects && dataset.projects.find(
    (v) => v.title === title
  );

  return (
    <article>
      <Meta title={"leeyeonji : " + projectItem.title} />
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
              {projectItem.percent}
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
                {projectItem.tech.map((v, i) => (
                  <li key={i}>{v}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>

        <div className="detail detail_btn">
          {projectItem.link && (
            <PageBtn
              link={projectItem.link}
              leftText="PROJECT"
              rightText=": LINK"
              target="_blank"
            />
          )}
          {projectItem.pc_link && (
            <PageBtn
              link={projectItem.pc_link}
              leftText="PROJECT"
              rightText=": PC LINK"
              target="_blank"
            />
          )}
          {projectItem.mo_link && (
            <PageBtn
              link={projectItem.mo_link}
              leftText="PROJECT"
              rightText=": MO LINK"
              target="_blank"
            />
          )}
          {projectItem.github && (
            <PageBtn
              link={projectItem.github}
              leftText="GITHUB"
              rightText=": LINK"
              target="_blank"
            />
          )}
        </div>

        <ul className="detail detail_view">
          {projectItem.view &&
            projectItem.view.map((v, i) => {
              return (
                <li key={i}>
                  {v.name && <h5 className="view_title">💡 {v.name}</h5>}
                  {v.text &&
                    v.text.map((item, idx) => {
                      return (
                        <p key={idx} className="view_desc">
                          {item}
                        </p>
                      );
                    })}
                  <img className={v.name == "랜딩 페이지 : MO" ? "view_mo" : "view_img"} src={v.img} alt={v.name} />
                </li>
              );
            })}
        </ul>
      </DetailContainer>
    </article>
  );
});

export default ProjectDetail;
