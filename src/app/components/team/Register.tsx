import React, {useState, useMemo} from "react";
import styled from "styled-components";
import Header from "../common/Header";
import IconUpload from "../../assets/img/iconUpload.svg";
import IconSelect from "../../assets/img/iconSelect.svg";

const ContentWrap = styled.div`
  margin: 0 auto;
  margin-top: 3.75rem;

  section {
    display: flex;
    justify-content: center;
    //align-items: center;
  }

  .sport-wrap {
    margin-top: 8rem;
    margin-bottom: 5rem;
    min-width: 28rem;
    min-height: 36.875rem;

    .content-title {
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

    .sport-btn-wrap {
      max-width: 30rem;
      margin-top: 1.5rem;
      margin-bottom: 0;
      padding: 0;

      li {
        display: inline-block;
        width: 8.75rem;
        height: 8.75rem;
        margin-top: 1.25rem;
        margin-right: 1.25rem;
        list-style: none;
        text-align: center;
        background: #FFFFFF;
        border: 1px solid #263055;
        box-sizing: border-box;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
        cursor: pointer;

        &:hover {
          opacity: .6;
        }

        div {
          margin-top: 1.8rem;
          text-align: center;

          p {
            margin-top: 0.5rem;
            margin-bottom: 0;
            font-style: normal;
            font-weight: bold;
            font-size: 1.25rem;

            color: #000000;
          }
        }

        .btn-more {
          p {
            margin-top: 100px;
          }
        }
      }
    }
  }

  .team-wrap {
    margin-top: 10.75rem;
    margin-left: 6rem;
    min-width: 24.5rem;
    min-height: 33.625rem;

    .content-input {

      label {
        font-style: normal;
        font-weight: 500;
        font-size: 1.25rem;
        color: #000;
      }

      input {
        width: 18.125rem;
        height: 2.25rem;
        margin-left: 2.875rem;
        font-style: normal;
        font-weight: 500;
        font-size: 1.25rem;
        border-bottom: 1px solid #263055;

        ::placeholder {
          color: #c4c4c4;
        }

        &#team-place {
          cursor: pointer;
          margin-top: 3rem;
          margin-left: 1.8rem;
          background-image: url(${IconSelect});
          background-repeat: no-repeat;
          background-position: top 1rem right 0.5rem;
        }
      }
    }

    .content-upload {
      margin-top: 3.125rem;

      span {
        font-style: normal;
        font-weight: 500;
        font-size: 1.25rem;
        color: #000;
      }

      .image-upload {
        margin-top: 1rem;
        width: 21.25rem;
        height: 11.625rem;
        background: #FFFFFF;
        box-sizing: border-box;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
        text-align: center;
        border: 1px solid #263055;
        border-radius: 12px;
        cursor: pointer;

        h3 {
          margin-top: 1.688rem;
          font-style: normal;
          font-weight: 500;
          font-size: 1rem;
          color: #C4C4C4;
        }

        img {
          margin-top: 0.672rem;
          width: 3.75rem;
          height: 3.75rem;
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
  }
`;

const TeamRegister = () => {

    const [teamData, setTeamData] = useState({
        name: "",
        place: 0,
        image: "",
        type: ""
    });
    const [moreFlag, setMoreFlag] = useState(false);

    const renderSportsList = useMemo(() => {
        const items: React.ReactElement[] = [];
        const SPORTS_LIST = ["축구/풋살", "농구", "야구", "골프", "테니스", "러닝", "헬스", "사이클"];

        if (moreFlag) {
            SPORTS_LIST.push("등산", "배드민턴", "볼링", "수영", "요가", "탁구", "스키/보드", "당구", "스케이트 보드", "격투기");
        }
        SPORTS_LIST.map((item: string, idx: number) => {
            const icon = require(`../../assets/img/team/sports0${idx + 1}.png`).default;
            items.push(
                <li key={idx}>
                    <div>
                        <img src={icon} alt="스포츠 아이콘"/>
                        <p>{item}</p>
                    </div>
                </li>
            );
            return item;
        });
        if (!moreFlag) {
            items.push(
                <li key={Math.random()} onClick={() => setMoreFlag(true)}>
                    <div className="btn-more">
                        <p>더보기</p>
                    </div>
                </li>
            );
        }
        return items;
    }, [moreFlag]);

    return (
        <>
            <Header/>
            <ContentWrap>
                <section>
                    <article className="sport-wrap">
                        <div className="content-title">
                            <h2>팀 만들기</h2>
                            <span>함께하고 싶은 스포츠를 선택해주세요.</span>
                        </div>
                        <ul className="sport-btn-wrap">
                            {renderSportsList}
                        </ul>
                    </article>
                    <article className="team-wrap">
                        <div className="content-input">
                            <label htmlFor="team-name">팀 이름</label>
                            <input type="text"
                                   id="team-name"
                                   placeholder="팀 이름을 입력해주세요."
                                   autoComplete="off"
                                   maxLength={20}
                                   value={teamData.name}
                                   onChange={(e) => setTeamData({...teamData, name: e.target.value})}
                            />
                        </div>
                        <div className="content-input">
                            <label htmlFor="team-place">지역 선택</label>
                            <input type="text"
                                   id="team-place"
                                   readOnly
                                   placeholder="지역을 선택해주세요."/>
                        </div>
                        <div className="content-upload">
                            <span>대표 이미지</span>
                            <div className="image-upload">
                                <h3>팀 대표 이미지를 선택해주세요.</h3>
                                <img src={IconUpload} alt="팀 대표이미지 아이콘"/>
                            </div>
                        </div>
                        <div className="btn-wrap">
                            <button type="button" className="btn-border">취소</button>
                            <button type="button" className="btn-color">완료</button>
                        </div>
                    </article>
                </section>
            </ContentWrap>
        </>
    );
};

export default TeamRegister;