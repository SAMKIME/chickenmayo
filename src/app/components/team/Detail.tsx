import React, {useState, useEffect, useMemo, useRef} from "react";
import {useNavigate, useParams} from 'react-router-dom';
import styled from "styled-components";
import Header from "../common/Header";
import IconSetting from "../../assets/img/iconSetting.svg";
import IconNotice from "../../assets/img/iconNotice.svg";
import IconLeader from "../../assets/img/iconLeader.svg";
import IconChat from "../../assets/img/iconChat.svg";
import IconDot from "../../assets/img/iconDot.svg";
import IconMember from "../../assets/img/iconMember.svg";
import TeamLogo from "../../assets/img/teamLogo.png";
import NoticeArrow01 from "../../assets/img/noticeArrow-1.svg";
import NoticeArrow02 from "../../assets/img/noticeArrow-2.svg";
import IconChatImg from "../../assets/img/iconChatImg.svg";
import IconChatSend from "../../assets/img/iconChatSend.svg";
import TempTeamLogo from "../../assets/img/tempTeamLogo.jpg";
import * as Api from "../../api/api";
import BtnClose from "../../assets/img/btnClose.svg";
import IconUpload from "../../assets/img/iconUpload.svg";
import SelectAreaModal from "../common/SelectArea";
import * as Utils from "../../containers/common/Utils";

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
    width: 50rem;
    //padding-right: 18.125rem;

    .team-timeline-notice {

      border-bottom: 1px solid #E5E5E5;

      .team-notice {
        margin: 1rem 0 1rem 3rem;
        width: 27.5rem;
        padding: 0.75rem 1rem 0.75rem 4.5rem;
        background-image: url(${IconNotice});
        background-repeat: no-repeat;
        background-size: 2rem;
        background-position: top 0.35rem left 2rem;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.19);
        border-radius: 30px;

        &.active {
          h3 {
            overflow: visible;
            white-space: inherit;
          }

          img {
            padding-bottom: 1rem;
          }
        }

        h3 {
          margin: 0;
          position: relative;
          width: 25rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          display: inline-block;
          font-family: Spoqa Han Sans Neo, sans-serif;
          font-weight: 700;
          font-size: 1rem;
          font-style: normal;
        }

        img {
          width: 1rem;
          height: 1rem;
          padding-left: 1rem;
          cursor: pointer;
        }
      }
    }

    .team-timeline-chat {
      .chat-wrap {
        overflow-y: scroll;
        margin-top: 1.5rem;
        margin-left: 3rem;
        width: 37.5rem;
        height: 65vh;

        ::-webkit-scrollbar {
          width: 0.625rem;
        }

        ::-webkit-scrollbar-thumb {
          height: 30%;
          background-color: #C4C4C4;
          border-radius: 50rem;
        }

        ::-webkit-scrollbar-track {
          border-radius: 50rem;
          background-color: #E5E5E5;
        }

        .chat-list {
          margin: 0 auto;
          padding: 0;

          li {
            display: block;
            width: 35rem;
            list-style: none;
            margin-bottom: 1rem;

            figure {
              margin: 0;
              display: inline-block;
              vertical-align: top;
              width: 2.25rem;
              height: 2.25rem;
              border-radius: 50rem;
              background-size: cover;
              background-position: center;
            }

            .chat-content {
              margin-left: 0.5rem;
              display: inline-block;
            }

            .chat-name {
              display: inline;
              width: 2.25rem;
              height: 2.25rem;
              font-family: Spoqa Han Sans Neo, sans-serif;
              font-weight: 700;
              font-size: 0.875rem;
              font-style: normal;
            }

            .chat-message {
              max-width: 15rem;
              margin-top: 0.125rem;
              padding: 0.625rem 1rem;
              background: #5BA0BF;
              border-radius: 12px;
              color: #FFFFFF;
              font-family: Spoqa Han Sans Neo, sans-serif;
              font-weight: 700;
              font-size: 1rem;
              font-style: normal;

            }
          }

          .chat-list-other {
            float: left;

            .chat-message {
              background: #5BA0BF;
            }
          }

          .chat-list-mine {
            width: inherit;
            margin-right: 2rem;
            float: right;

            figure {
              display: none;
            }

            .chat-name {
              display: none;
            }

            .chat-message {
              background: #354784;
            }
          }
        }
      }

      .chat-input-wrap {
        position: relative;
        margin-top: 1.5rem;
        margin-left: 2.25rem;
        width: 37.5rem;
        border: 1px solid #000000;
        box-sizing: border-box;
        border-radius: 30px;

        input {
          padding: 0.75rem 0;
          margin-left: 1.75rem;
          width: 25rem;
          font-family: Spoqa Han Sans Neo, sans-serif;
          font-weight: 700;
          font-size: 1rem;
          font-style: normal;
        }

        div {
          display: inline-flex;
          position: absolute;
          //top: 12%;
          right: 1.75rem;

          figure {
            margin: 0.2rem 0 0 0;
            width: 2.25rem;
            height: 2.25rem;
            display: inherit;
            padding: 0;

            img {
              margin-left: 0.125rem;
            }

            &:nth-child(2) {
              margin-left: 0.625rem;
              margin-top: 0.125rem;
            }

            &:hover {
              background-color: #E5E5E5;
              border-radius: 50rem;
            }
          }

          .icon-img {
            width: 2rem;
          }

          .icon-send {
            width: 1.75rem;
          }
        }
      }
    }
  }

  .team-feed-wrap {
    display: grid;
    grid-template-columns: 16.5rem 16.5rem 16.5rem;
    grid-auto-rows: 16.5rem;
    grid-column-gap: 0.125rem;
    grid-row-gap: 0.125rem;

    figure {
      margin: 0;
      cursor: pointer;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }

  .team-member-wrap {
    margin: 3rem 0 0 1.75rem;
    color: #000000;
    font-family: Spoqa Han Sans Neo, sans-serif;
    font-style: normal;
    font-weight: bold;

    h2 {
      margin: 0;
      font-size: 1.2rem;

      span {
        color: #354784;
      }
    }

    .member-list {
      margin: 1rem 0 0 0;
      padding: 0;

      li {
        width: 31.25rem;
        position: relative;
        padding: 1.5rem 0;
        border-top: 1px solid #DFE2E4;
        list-style: none;
        display: flex;
        align-items: center;

        &:last-child {
          border-bottom: 1px solid #DFE2E4;
        }

        figure {
          margin: 0 0 0 0.5rem;
          display: inline-block;
          width: 4rem;
          height: 4rem;
          border-radius: 50rem;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          cursor: pointer;
        }

        .member-name {
          margin-left: 1.25rem;
          font-size: 1rem;
        }

        .member-invite {
          margin-left: 1.25rem;
          cursor: pointer;
          font-size: 1rem;
          color: #7B7B77;
        }

        .icon-leader {
          width: 1.5rem;
          margin-left: 0.375rem;
        }

        .right {
          position: absolute;
          right: 0.5rem;
          cursor: pointer;
          width: 2rem;
        }
      }
    }
  }
`;

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

        &.active {
          text-decoration: underline;
        }
      }
    }
  }
`;

const FeedPopup = styled.aside`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: hidden;
  z-index: 999;

  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    text-align: center;
    vertical-align: center;

    img {
      z-index: 999;
      border-radius: 0.5rem;
    }
  }

  &.active {
    visibility: visible;
  }
`;

const TeamSettingModal = styled.aside`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: hidden;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    width: 25rem;
    //height: 40rem;
    background-color: #ffffff;
    border-radius: 12px;
    padding: 1.125rem 2rem 2rem;

    div {
      display: flex;
      justify-content: space-between;
    }

    h2 {
      margin: 0;
      display: inline;
      color: #000000;
      font-family: Spoqa Han Sans Neo, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 2rem;
    }

    .team-wrap {
      margin-top: 4rem;
      font-family: Spoqa Han Sans Neo, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 1.125rem;

      .content-input {
        textarea {
          width: 16.25rem;
          border: none;
          border-bottom: 1px solid #263055;
          resize: none;
          font-size: 1.125rem;
        }

        &:nth-child(2) {
          margin-top: 2rem;

          input {
            width: 15.625rem;
            font-size: 1.125rem;
            border-bottom: 1px solid #263055;
            padding: 0.5rem;
          }
        }
      }

      .content-upload {
        margin-top: 2rem;

        .image-upload {
          margin-top: 1rem;
          width: 18.75rem;
          height: 11.625rem;
          background: #FFFFFF;
          box-sizing: border-box;
          box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
          text-align: center;
          border: 1px solid #263055;
          border-radius: 12px;
          cursor: pointer;
          overflow: hidden;

          h3 {
            font-size: 1.125rem;
            margin-top: 1.688rem;
            font-style: normal;
            font-weight: 500;
            color: #C4C4C4;
          }

          .upload-icon {
            margin-top: 0.672rem;
            width: 3.75rem;
            height: 3.75rem;
          }
        }
      }
    }


    .btn-wrap {
      margin-top: 4.5rem;
      display: flex;
      //justify-content: center;
      align-items: center;

      button {
        margin-right: 1rem;
        width: 11.25rem;
        height: 3.75rem;
        text-align: center;
        font-style: normal;
        font-weight: bold;
        font-size: 1.25rem;

        &:hover {
          opacity: 0.8;
        }
      }

      .btn-border {
        border: 1px solid #263055;
        box-sizing: border-box;
        border-radius: 12px;
        color: #263055;
        background: #FFFFFF;
      }

      .btn-color {
        box-sizing: border-box;
        border-radius: 12px;
        color: #FFFFFF;
        background: #263055;
      }
    }

    .close-btn {
      cursor: pointer;
    }
  }

  &.active {
    visibility: visible;
  }
`;

const TeamDetail = () => {
    const navigate = useNavigate();
    const params = useParams();

    const AREA_LIST: string[] = ["전국", "서울", "경기/강원", "인천", "대전/세종/충청", "대구/경북", "부산/울산/경남", "광주/전라", "제주"];

    const [arrowFlag, setArrowFlag] = useState<boolean>(false);
    const [teamId] = useState<number>(0);
    const [tabPosition, setTabPosition] = useState<number>(Number(params.tab) || 0);
    const [chatList, setChatList] = useState(Array(8).fill(""));
    const [chatMessage, setChatMessage] = useState<string>("");
    const [feedList, setFeedList] = useState(Array(17).fill(""));
    const [feedActiveFlag, setFeedActiveFlag] = useState<boolean>(false);
    const [memberList, setMemberList] = useState(Array(5).fill(""));
    const [teamSettingModal, setTeamSettingModal] = useState({
        active: false,
        introduce: "",
        place: -1,
        image: ""
    });
    const [selectAreaModal, setSelectAreaModal] = useState({
        active: false
    });
    const fileInputRef = useRef<HTMLInputElement>(null); //## 파일 업로드 input ref 생성

    useEffect(() => {
        // tempApi();
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (!params.tab) {
            return;
        }

        if (Number(params.tab) !== tabPosition) {
            setTabPosition(Number(params.tab));
        }
    }, [params]);

    const changeTab = (position: number) => {
        //todo 팀 id 처리
        navigate(`/team/detail/0/${position}`, {replace: true});
    };

    /*
     * 지역 선택 모달 처리
     */
    const selectAreaResult = (type: string, position: number) => {
        setSelectAreaModal({
            active: false
        });

        if (type === "select") {
            setTeamSettingModal({
                ...teamSettingModal,
                place: position
            });
        }
    };

    /**
     * 프로필 이미지 파일 체크
     * -----------------------------------------------------------------------------------------------------------------
     * @param e : Object Data
     */
    const getProfileFileName = (e: any) => {
        let reader: FileReader = new FileReader();

        if (e.files[0]) {
            reader.onload = function (readerEvent: any) {
                Utils.setImageResize(readerEvent, 340, function (response: any) {
                    //## 프로필 이미지 변경
                    setTeamSettingModal({
                        ...teamSettingModal,
                        image: response
                    });
                });
            };
            reader.readAsDataURL(e.files[0]);
        }
    };

    const renderChatList = useMemo(() => {
        return (
            chatList.map((item: any, idx: number) => {
                return (
                    <li className={idx % 3 === 0 ? "chat-list-mine" : "chat-list-other"} key={idx}>
                        <figure style={{backgroundImage: `url(${TempTeamLogo})`}}/>
                        <div className="chat-content">
                            <div className="chat-name">테스트2</div>
                            <div className="chat-message">테스트입니다. 안녕하세요 반갑습니다 어서오세요</div>
                        </div>
                    </li>
                );
            })
        );
    }, [chatList]);

    const renderFeedList = () => {
        return (
            feedList.map((item: any, idx: number) => {
                return (
                    <figure style={{backgroundImage: `url(${TempTeamLogo})`}} key={idx}
                            onClick={() => setFeedActiveFlag(!feedActiveFlag)}/>
                );
            })
        );
    };

    const renderMemberList = () => {
        return (
            memberList.map((item: any, idx: number) => {
                return (
                    <li key={idx}>
                        <figure style={{backgroundImage: `url(${TempTeamLogo})`}}/>
                        <div className="member-name">테스트 (나)</div>
                        <img src={IconLeader} alt=".." className="icon-leader"/>
                        <img src={IconChat} alt=".." className="icon-chat right"/>
                        {/*<img src={IconDot} alt=".." className="icon-chat right"/>*/}
                    </li>
                );
            })
        );
    };

    const tempApi = async () => {
        await Api.getUserInfo()
            .then((response: any) => {
                if (response.status === 200) {
                    console.log("test");
                }
            })
            .catch((err) => {
                // todo 모달 작업
                // setErrorPopup({ active: 'active', content: defaultMsg });
            });
    };

    return (
        <>
            <Header teamHeaderClass={true}/>
            <SubHeaderWrap>
                <ul>
                    <li>
                        <a href={undefined} className={tabPosition === 0 ? "active" : ""}
                           onClick={() => changeTab(0)}>타임라인</a>
                    </li>
                    <li>
                        <a href={undefined} className={tabPosition === 1 ? "active" : ""}
                           onClick={() => changeTab(1)}>피드</a>
                    </li>
                    <li>
                        <a href={undefined} className={tabPosition === 2 ? "active" : ""}
                           onClick={() => changeTab(2)}>멤버</a>
                    </li>
                </ul>
            </SubHeaderWrap>
            <ContentWrap>
                {
                    tabPosition !== 1 &&
                    <div className="team-info-wrap">
                        <figure style={{backgroundImage: `url(${TeamLogo})`}}/>
                        <div className="team-info">
                            <h2>삼김이 (SAMKIME)</h2>
                            <div onClick={() => changeTab(2)}><u>멤버 5명</u></div>
                            <div>Since 2022년 1월 2일</div>
                            <div>#서울 #축구</div>
                        </div>
                        <div className="team-content">
                            <h3>팀 소개</h3>
                            <div>축구를 좋아하고 자유롭게 친목 다지실 분들 모집합니다.</div>
                        </div>
                        <div className="team-setting">
                            <button className="team-set-btn"
                                    onClick={() => setTeamSettingModal({...teamSettingModal, active: true})}>팀 설정
                            </button>
                        </div>
                    </div>
                }

                {
                    /* 타임라인 채팅 */
                    tabPosition === 0 &&
                    <div className="team-timeline-wrap">
                        <div className="team-timeline-notice">
                            <div className={"team-notice" + (arrowFlag ? " active" : "")}>
                                <h3>(공지) 이번 주 경기는 고척동 동양공전 축구장에서 실시합니다! 불참하실 분들은 미리 알려주시기 바랍니다~</h3>
                                <img src={arrowFlag ? NoticeArrow02 : NoticeArrow01} alt=".."
                                     onClick={() => setArrowFlag(!arrowFlag)}/>
                            </div>
                        </div>
                        <div className="team-timeline-chat">
                            <div className="chat-wrap">
                                <ul className="chat-list">
                                    {renderChatList}
                                </ul>
                            </div>
                            <div className="chat-input-wrap">
                                <input type="text" value={chatMessage}
                                       onChange={(e) => setChatMessage(e.target.value)}/>
                                <div>
                                    <figure>
                                        <img src={IconChatImg} alt=".." className="icon-img"/>
                                    </figure>
                                    <figure>
                                        <img src={IconChatSend} alt=".." className="icon-send"/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    tabPosition === 1 &&
                    /* 피드 (사진첩) */
                    <div className="team-feed-wrap">
                        {renderFeedList()}
                    </div>
                }
                {
                    tabPosition === 2 &&
                    /* 멤버 관리 */
                    <div className="team-member-wrap">
                        <h2>멤버 <span>5</span> 명</h2>
                        <ul className="member-list">
                            {renderMemberList()}
                            <li key={Math.random()}>
                                <figure style={{backgroundImage: `url(${IconMember})`}}/>
                                <div className="member-invite">멤버 초대하기</div>
                            </li>
                        </ul>
                    </div>
                }
            </ContentWrap>

            <FeedPopup className={feedActiveFlag ? "active" : ""} onClick={() => setFeedActiveFlag(!feedActiveFlag)}>
                <figure>
                    <img src={TempTeamLogo} alt=".." className="icon-img"/>
                </figure>
            </FeedPopup>

            <TeamSettingModal className={teamSettingModal.active ? "active" : ""}>
                <div className="modal">
                    <div>
                        <h2>팀 설정</h2>
                        {/*<img className="close-btn" src={BtnClose} alt=".."*/}
                        {/*     onClick={() => setTeamSettingModal({...teamSettingModal, active: false})}/>*/}
                    </div>
                    <article className="team-wrap">
                        <div className="content-input">
                            <label htmlFor="team-introduce">팀 소개</label>
                            <textarea id="team-introduce"
                                      placeholder="팀 소개를 입력해주세요."
                                      autoComplete="off"
                                      maxLength={50}
                                      rows={3}
                                      value={teamSettingModal.introduce}
                                      onChange={(e) => setTeamSettingModal({
                                          ...teamSettingModal,
                                          introduce: e.target.value
                                      })}/>
                        </div>
                        <div className="content-input">
                            <label htmlFor="team-place">지역 선택</label>
                            <input type="text"
                                   id="team-place"
                                   readOnly
                                   placeholder="지역을 선택해주세요."
                                   value={AREA_LIST[teamSettingModal.place] || ""}
                                   onClick={() => setSelectAreaModal({active: true})}/>
                        </div>
                        <div className="content-upload" onClick={() => fileInputRef.current?.click()}>
                            <div>대표 이미지</div>
                            <span className="image-upload">
                                {
                                    teamSettingModal.image ?
                                        <>
                                            <img className="upload-img" src={teamSettingModal.image} alt="팀 대표이미지"/>
                                        </>
                                        :
                                        <>
                                            <h3>팀 대표 이미지를 선택해주세요</h3>
                                            <img className="upload-icon" src={IconUpload} alt="팀 대표이미지 아이콘"/>
                                        </>
                                }
                            </span>
                        </div>
                        <div className="btn-wrap">
                            <button type="button" className="btn-border"
                                    onClick={() => setTeamSettingModal({...teamSettingModal, active: false})}>취소
                            </button>
                            <button type="button" className="btn-color">수정</button>
                        </div>
                    </article>
                </div>
            </TeamSettingModal>
            <input
                type="file"
                id="profile"
                style={{visibility: "hidden"}}
                ref={fileInputRef}
                accept="image/png, image/jpeg, image/jpg"
                onChange={(e) => getProfileFileName(e.target)}
            />
            <SelectAreaModal
                active={selectAreaModal.active}
                selectArea={teamSettingModal.place}
                selectAreaResult={selectAreaResult}/>
        </>
    );
};

export default TeamDetail;