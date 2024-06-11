import React, { memo , useState, useEffect} from "react";
import styled from "styled-components";
import * as colors from "../assets/style/colors";
import PageTitle from "../components/PageTitle";
import SubTitle from "../components/SubTitle";
import PageBtn from "../components/PageBtn";

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
      margin-bottom: 6px;
      line-height: 1.5;

      b {
        display: inline-block;
        padding-right: 20px;

        i {
          color: ${colors.ORANGE};
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

  return (
    <DetailContainer className="inner">
      <PageTitle rightText="Mary's Forest" contentText="Projects" />
      <SubTitle text="기업 사이트 제작" border="none" />

      <div class="detail">
        <h3>OverView.</h3>
        <p>
          키즈놀이터 홈페이지입니다. 메인페이지, 메리의 숲 이야기 페이지,
          공간안내 페이지, 예약페이지, 공지사항페이지의 퍼블리싱을
          담당하였습니다.
          <br /> 모든 페이지가 반응형으로서 모바일, 태블릿에서도 문제없이 볼 수
          있도록 제작하였습니다.
        </p>
      </div>

      <div class="detail">
        <h3>WorkInfo.</h3>
        <ul>
          <li>
            <b>
              <i class="fa-solid fa-user"></i>
            </b>
            100%
          </li>
          <li>
            <b>
              <i class="fa-solid fa-hourglass"></i>
            </b>
            2022.05 ~ 2022.09 (5개월)
          </li>
          <li>
            <b>
              <i class="fa-solid fa-layer-group"></i>
            </b>
            메인페이지, 메리의 숲 이야기 페이지, 공간안내 페이지, 예약페이지,
            공지사항페이지의 퍼블리싱 담당
          </li>
          <li>
            <b>
              <i class="fa-solid fa-screwdriver-wrench"></i>
            </b>
            bootstrap, html, css, jquery, javascript, flatpicker, git, gitlab
          </li>
        </ul>
      </div>

      <div className="detail detail_btn">
        <PageBtn link="http://marysforest.co.kr/view/" leftText="PROJECT" rightText=": LINK" />
        <PageBtn link="" leftText="GITHUB" rightText=": LINK" />
      </div>
    </DetailContainer>
  );
});

export default ProjectDetail;
