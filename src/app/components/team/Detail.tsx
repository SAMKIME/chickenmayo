import React, {useState, useEffect, useMemo} from "react";
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";
import Header from "../common/Header";
import IconSetting from "../../assets/img/iconSetting.svg";
import TeamLogo from "../../assets/img/teamLogo.png";

const SubHeaderWrap = styled.div`
  padding-top: 60px;

  ul {
    margin: 0 auto;
    padding: 0;
    background-color: #F8F9FA;
    text-align: center;
    border-bottom: 1px solid #E5E5E5;

    li {
      display: inline-block;
      padding: 1.375rem 1.5rem;

      a {
        color: #364554;
        font-family: Spoqa Han Sans Neo, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 1.2rem;
        cursor: pointer;
      }
    }
  }
`;
const ContentWrap = styled.div`
  margin: 0 auto;
  display: flex;
  height: calc(100vh - 129px);
  justify-content: center;
  //margin-top: 3.75rem;

  .team-info-wrap {
    float: left;
    border: 1px solid #E5E5E5;
    padding: 3.438rem 3rem 0;
    font-family: Spoqa Han Sans Neo, sans-serif;
    font-style: normal;

    figure {
      margin: 0;
      width: 13.75rem;
      height: 10rem;
    }

    h2 {
      font-size: 1.25rem;
      margin-top: 1.5rem;
      margin-bottom: 0;
      font-weight: 700;
    }

    .team-info {
      width: 13.75rem;
      border-bottom: 1px solid #E5E5E5;

      div:nth-child(2) {
        margin-top: 0.5rem;
        color: #263055;
        font-weight: 500;
        font-size: 1rem;
        cursor: pointer;
      }

      div:nth-child(3) {
        margin-top: 0.5rem;
        color: #7B7B77;;
        font-weight: 500;
        font-size: 1rem;
      }

      div:nth-child(4) {
        margin-top: 0.5rem;
        margin-bottom: 1.5rem;
        color: #000000;
        font-weight: 700;
        font-size: 1rem;
      }
    }

    .team-content {
      border-bottom: 1px solid #E5E5E5;

      h3 {
        font-size: 1.125rem;
      }

      div {
        width: 13.75rem;
        margin-bottom: 1.5rem;
        color: #7B7B77;
        font-weight: 500;
        font-size: 1rem;
      }
    }

    .team-setting {
      margin-top: 1.5rem;

      .team-set-btn {
        padding-right: 3rem;
        font-weight: 700;
        font-size: 1.125rem;
        background-image: url(${IconSetting});
        background-repeat: no-repeat;
        background-size: 1.5rem 1.5rem;
        background-position: top 0 left 3.8rem;
      }
    }
  }

  .team-timeline-wrap {
    float: right;
    border: 1px solid #E5E5E5;
  }

`;

const TeamDetail = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header teamHeaderClass={true}/>
            <SubHeaderWrap>
                <ul>
                    <li>
                        <a href={undefined}><u>타임라인</u></a>
                    </li>
                    <li>
                        <a href={undefined}><u>피드</u></a>
                    </li>
                    <li>
                        <a href={undefined}><u>멤버</u></a>
                    </li>
                </ul>
            </SubHeaderWrap>
            <ContentWrap>
                <div className="team-info-wrap">
                    <figure style={{backgroundImage: `url(${TeamLogo})`}}/>
                    <div className="team-info">
                        <h2>삼김이 (SAMKIME)</h2>
                        <div><u>멤버 5명</u></div>
                        <div>Since 2022년 1월 2일</div>
                        <div>#서울 #축구</div>
                    </div>
                    <div className="team-content">
                        <h3>팀 소개</h3>
                        <div>축구를 좋아하고 자유롭게 친목 다지실 분들 모집합니다.</div>
                    </div>
                    <div className="team-setting">
                        <button className="team-set-btn">팀 설정</button>
                    </div>
                </div>

                <div className="team-timeline-wrap">

                </div>
            </ContentWrap>
        </>
    );
};

export default TeamDetail;

