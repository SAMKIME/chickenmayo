import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";
import Header from "../common/Header";
import SearchBar from "./common/SearchBar";
import Filter from "../common/Filter";
import BtnRegister from "../../assets/img/btnRegister.svg";
import TempTeamLogo from "../../assets/img/tempTeamLogo.jpg";
import Footer from "../common/Footer";

const ContentWrap = styled.div`
  padding-top: 3.75rem;
  //display: flex;

  .search-wrap {
    padding-top: 5rem;
    margin: 0 auto;
    text-align: center;
    position: relative;
    //width: 50%;

    @media screen and (max-width: 768px) {
      padding-top: 3.75rem;
    }
  }

  .team-wrap {
    padding-top: 2.5rem;

    ul.team-list {
      width: 62.5rem;
      margin: 0 auto;
      padding: 0;

      li {
        width: 13.75rem;
        height: 13.75rem;
        list-style: none;
        background: #FFFFFF;
        border: 1px solid #F4F4F4;
        box-sizing: border-box;
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        cursor: pointer;
        text-align: center;
        font-family: Spoqa Han Sans Neo, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;

        &:first-child {
          display: flex;
          justify-content: center;

          img {
            padding-top: 3rem;
            width: 6.25rem;
            height: 6.25rem;
          }
        }
      }

      @media screen and (max-width: 768px) {
        width: 60%;
        li {
          width: 13.75rem;
          height: 8.75rem;

          img {
            padding-top: 0 !important;
          }
        }
      }
    }
  }

  .banner-wrap {
    padding-top: 3.75rem;

    .banner {
      width: 100%;
      height: 17.5rem;
      background-color: #F8F9FA;

      .banner-list {
        margin: 0 auto;
        width: 62.5rem;
        height: 100%;
        background-color: #C4C4C4;
        border-radius: 20px;
      }

      @media screen and (max-width: 768px) {
        height: 8.75rem;
        .banner-list {
          width: 100%;
        }
      }
    }
  }

  .find-team-wrap {
    padding-top: 3.125rem;

    @media screen and (max-width: 768px) {
      padding-top: 2.5rem;
    }

    .find-team-filter {
      margin: 0 auto;
      max-width: 62.5rem;

      @media screen and (max-width: 768px) {
        padding: 1rem;
      }
    }

    .find-team-list {
      margin: 0 auto;
      max-width: 62.5rem;
      padding-top: 1.875rem;

      ul {
        display: inline-block;
        padding: 0;
        margin: 0 auto;

        li {
          cursor: pointer;
          list-style: none;
          max-width: 13.75rem;
          float: left;
          margin-right: 2.5rem;

          img {
            border-radius: 12px;
            width: 220px;
            height: 160px;
          }

          .team-content {
            h3 {
              font-family: Spoqa Han Sans Neo, sans-serif;
              font-style: normal;
              font-weight: bold;
              font-size: 1rem;
            }
          }

          &:nth-child(4n+0) {
            margin-right: 0;
          }
        }

        @media screen and (max-width: 768px) {
          padding: 1rem;


          li {
            margin-right: 2rem;

            &:nth-child(4n+0) {
              margin-right: 2rem;
            }
          }

          li img {
            width: 110px;
            height: 80px;
          }
        }
      }

      @media screen and (max-width: 768px) {
        padding: 0;
      }
    }

    .btn-wrap {
      margin: 0 auto;
      padding: 3.75rem 0 5.375rem 0;
      max-width: 21.75rem;

      button {
        text-align: center;
        width: 21.75rem;
        height: 3.75rem;
        background: #1F3479;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 30px;
        font-family: Spoqa Han Sans Neo, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 29px;
        color: #FFFFFF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }

      @media screen and (max-width: 768px) {
        padding-top: 0 !important;
        padding-bottom: 2rem !important;
        max-width: 12rem;

        button {
          width: 12rem;
          height: 2.75rem;
        }
      }

    }
  }
`;


const Main = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
        }
    }, []);

    const moveTeamDetail = (id: number) => {
        // todo 팀 상세 작업
        navigate("/team/detail");
    }

    const renderFindTeamList = () => {
        let temp = Array(8).fill(0);
        return (
            temp.map((item: any, idx: number) => {
                return (
                    <li key={idx} onClick={() => moveTeamDetail(0)}>
                        <img src={TempTeamLogo}/>
                        <div className="team-content">
                            <h3>신길동 전우회</h3>
                        </div>
                    </li>
                );
            })
        );
    };

    return (
        <>
            <Header fixed={true}/>
            <main>
                <ContentWrap>
                    <div className="search-wrap">
                        <SearchBar/>
                    </div>
                    <div className="team-wrap">
                        <ul className="team-list">
                            <li onClick={() => navigate("/team/register")}>
                                <div>
                                    <img src={BtnRegister}/>
                                    <div>팀 만들기</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/*<div className="banner-wrap">*/}
                    {/*    <div className="banner">*/}
                    {/*        <div className="banner-list"></div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="find-team-wrap">
                        <div className="find-team-filter">
                            <Filter/>
                        </div>
                        <div className="find-team-list">
                            <ul>
                                {renderFindTeamList()}
                            </ul>
                        </div>
                        <div className="btn-wrap">
                            <button type="button" onClick={() => navigate("/team/list")}>축구 팀 더보기</button>
                        </div>
                    </div>
                </ContentWrap>
            </main>
            <Footer/>
        </>
    );
};

export default Main;