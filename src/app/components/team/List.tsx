import React, {useState, useEffect, useMemo} from "react";
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";
import Header from "../common/Header";
import Filter from "../common/Filter";
import IconLeader from "../../assets/img/iconLeader.svg";
import TeamLogo from "../../assets/img/tempTeamLogo.jpg";

const ContentWrap = styled.div`
  margin: 0 auto;
  margin-top: 3.75rem;

  section {
    display: flex;
    justify-content: center;
    background-color: #ffffff;

    &.scroll {
      position: fixed;
      width: 100%;
      top: 0;
    }

    .search-wrap {
      margin-top: 2rem;
    }
  }

  .search-wrap {
    margin-top: 8rem;
    min-width: 62.5rem;
    min-height: 11.25rem;

    .content-title {
      margin-bottom: 2rem;

      h2 {
        margin-top: 0;
        margin-bottom: 0.75rem;
        font-style: normal;
        font-weight: bold;
        font-size: 2rem;
        color: #000000;
      }

      span {
        margin-left: 0.375rem;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 500;
        color: #7B7B77;
      }
    }
  }

  .search-list-wrap {
    margin-bottom: 5rem;
    min-width: 62.5rem;
    min-height: 11.25rem;

    h4 {
      margin-top: 0;
      margin-bottom: 2rem;
      font-family: Spoqa Han Sans Neo, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      color: #7B7B77;

      span {
        color: #354784;
      }
    }

    ul {
      padding: 0;

      li {
        margin-top: 1.5rem;
        display: flex;
        justify-content: center;
        list-style: none;
        min-height: 11.5rem;
        border-bottom: 1px solid #DFE2E4;

        figure {
          cursor: pointer;
          margin: 0 2rem 1.5rem 0;
          width: 13.75rem;
          height: 10rem;
          border: 1px solid #E5E5E5;
          box-sizing: border-box;
          border-radius: 12px;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .list-content {
          font-family: Spoqa Han Sans Neo, sans-serif;

          h3 {
            cursor: pointer;
            font-style: normal;
            font-weight: 700;
            font-size: 1.25rem;
            margin: 1rem 0;
            color: #000000;
          }

          dl {
            dd:first-child {
              width: 41.375rem;
              margin-left: 0;
              margin-bottom: 1rem;
              font-weight: 500;
              font-size: 1rem;
              color: #7B7B77;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }

            dd:last-child {
              margin-left: 0;
              margin-bottom: 1rem;
              font-weight: 500;
              font-size: 1rem;
              color: #263055;

              span {
                color: #000000;
              }
            }
          }

          .leader {
            display: flex;
            align-items: center;
            font-family: Spoqa Han Sans Neo, sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 1rem;
            line-height: 23px;
            color: #263055;

            img {
              margin-right: 0.375rem;
              width: 1.625rem;
              height: 1.625rem;
            }
          }
        }
      }
    }
  }
`;

const TeamList = () => {
    const naviagte = useNavigate();

    const [teamSearchList, setTeamSearchList] = useState(Array(5).fill(""));
    const [scrollFlag, setScrollFlag] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);

        window.addEventListener("scroll", scrollListener);
        return () => {
            window.removeEventListener("scroll", scrollListener)
        }
    }, []);

    /*
     * ????????? ?????????
     */
    const scrollListener = () => {
        const scrollY = window.scrollY;
        setScrollFlag(scrollY > 61);
    };

    /*
     * ??? ?????? ????????? ??????
     */
    const searchTeamList = () => {
        //todo ????????? ?????? ??????
    };

    const renderTeamList = useMemo(() => {
        return (
            teamSearchList.map((item: any, idx: number) => {
                return (
                    <li key={idx} onClick={() => naviagte("/team/detail")}>
                        <figure style={{backgroundImage: `url(${TeamLogo})`}}/>
                        <div className="list-content">
                            <h3>????????? (SAMKIME)</h3>
                            <dl>
                                <dd>????????? ???????????? ???????????? ?????? ????????? ?????? ???????????????. ????????? ???????????? ???????????? ?????? ????????? ?????? ???????????????</dd>
                                <dd>?????? 5??? <span>#?????? #??????</span></dd>
                            </dl>
                            <div className="leader"><img src={IconLeader}/>?????? ???*???</div>
                        </div>
                    </li>
                );
            })
        );
    }, [teamSearchList]);

    return (
        <>
            <Header/>
            <ContentWrap>
                <section className={scrollFlag ? "scroll" : ""}>
                    <article className="search-wrap">
                        <div className="content-title">
                            <h2>??? ??????</h2>
                            <span>{"??? > " + "??????, ??????"}</span>
                        </div>
                        <Filter searchTeamList={searchTeamList}/>
                    </article>
                </section>
                <section>
                    <article className="search-list-wrap">
                        <h4>?????? ?????? <span>14</span>?????? ???</h4>
                        <ul>
                            {renderTeamList}
                        </ul>
                    </article>
                </section>
            </ContentWrap>
        </>
    );
};

export default TeamList;

