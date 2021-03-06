import React, {useState, useRef, useMemo} from "react";
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";
import Header from "../common/Header";
import SelectAreaModal from "../common/SelectArea";
import * as Utils from "../../containers/common/Utils";
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

        &.select {
          border: 1px solid #DB0000;
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
        overflow: hidden;

        h3 {
          margin-top: 1.688rem;
          font-style: normal;
          font-weight: 500;
          font-size: 1rem;
          color: #C4C4C4;
        }

        .upload-icon {
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

const AREA_LIST: string[] = ["??????", "??????", "??????/??????", "??????", "??????/??????/??????", "??????/??????", "??????/??????/??????", "??????/??????", "??????"];

const TeamRegister = () => {
    const navigate = useNavigate();

    const [teamData, setTeamData] = useState({
        sports: -1,
        name: "",
        place: -1,
        image: ""
    });
    const [moreFlag, setMoreFlag] = useState(false);
    const [selectAreaModal, setSelectAreaModal] = useState({
        active: false
    });
    const fileInputRef = useRef<HTMLInputElement>(null); //## ?????? ????????? input ref ??????

    /*
     * ??? ?????? ????????? ??????
     */
    const validationCheck = () => {
        const {name, place, image, sports} = teamData;

        let checkMsg: string = "";
        if (sports < 0) {
            checkMsg = "???????????? ?????? ???????????? ??????????????????.";
        } else if (!name) {
            checkMsg = "??? ????????? ??????????????????.";
        } else if ((/[^a-z|A-Z|0-9|???-???|???-???]/g).test(name)) {
            checkMsg = "??? ????????? ??????????????? ????????? ??? ????????????.";
        } else if (place < 0) {
            checkMsg = "????????? ??????????????????.";
        } else if (image === "") {
            checkMsg = "?????? ???????????? ?????????????????????.";
        }
        if (checkMsg) {
            alert(checkMsg);
        } else {
            //todo ??? ?????? ??????
        }
    };

    /*
     * ?????? ?????? ?????? ??????
     */
    const selectAreaResult = (type: string, position: number) => {
        setSelectAreaModal({
            active: false
        });

        if (type === "select") {
            setTeamData({
                ...teamData,
                place: position
            });
        }
    };

    /**
     * ????????? ????????? ?????? ??????
     * -----------------------------------------------------------------------------------------------------------------
     * @param e : Object Data
     */
    const getProfileFileName = (e: any) => {
        let reader: FileReader = new FileReader();

        if (e.files[0]) {
            reader.onload = function (readerEvent: any) {
                Utils.setImageResize(readerEvent, 340, function (response: any) {
                    //## ????????? ????????? ??????
                    setTeamData({
                        ...teamData,
                        image: response
                    });
                });
            };
            reader.readAsDataURL(e.files[0]);
        }
    };

    /*
     * ????????? ?????? Rendering
     */
    const renderSportsList = useMemo(() => {
        const items: React.ReactElement[] = [];
        const SPORTS_LIST = ["??????/??????", "??????", "??????", "??????", "?????????", "??????", "??????", "?????????"];

        if (moreFlag) {
            SPORTS_LIST.push("??????", "????????????", "??????", "??????", "??????", "??????", "??????/??????", "??????", "???????????? ??????", "?????????");
        }
        SPORTS_LIST.map((item: string, idx: number) => {
            const icon = require(`../../assets/img/team/sports0${idx + 1}.png`).default;
            items.push(
                <li key={idx} className={idx === teamData.sports ? "select" : ""}
                    onClick={() => setTeamData({...teamData, sports: idx})}>
                    <div>
                        <img src={icon} alt="????????? ?????????"/>
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
                        <p>?????????</p>
                    </div>
                </li>
            );
        }
        return items;
    }, [moreFlag, teamData]);

    return (
        <>
            <Header/>
            <ContentWrap>
                <section>
                    <article className="sport-wrap">
                        <div className="content-title">
                            <h2>??? ?????????</h2>
                            <span>???????????? ?????? ???????????? ??????????????????.</span>
                        </div>
                        <ul className="sport-btn-wrap">
                            {renderSportsList}
                        </ul>
                    </article>
                    <article className="team-wrap">
                        <div className="content-input">
                            <label htmlFor="team-name">??? ??????</label>
                            <input type="text"
                                   id="team-name"
                                   placeholder="??? ????????? ??????????????????."
                                   autoComplete="off"
                                   maxLength={20}
                                   value={teamData.name}
                                   onChange={(e) => setTeamData({...teamData, name: e.target.value})}
                            />
                        </div>
                        <div className="content-input">
                            <label htmlFor="team-place">?????? ??????</label>
                            <input type="text"
                                   id="team-place"
                                   readOnly
                                   placeholder="????????? ??????????????????."
                                   value={AREA_LIST[teamData.place] || ""}
                                   onClick={() => setSelectAreaModal({active: true})}/>
                        </div>
                        <div className="content-upload" onClick={() => fileInputRef.current?.click()}>
                            <span>?????? ?????????</span>
                            <div className="image-upload">
                                {
                                    teamData.image ?
                                        <>
                                            <img className="upload-img" src={teamData.image} alt="??? ???????????????"/>
                                        </>
                                        :
                                        <>
                                            <h3>??? ?????? ???????????? ??????????????????.</h3>
                                            <img className="upload-icon" src={IconUpload} alt="??? ??????????????? ?????????"/>
                                        </>
                                }
                            </div>
                        </div>
                        <div className="btn-wrap">
                            <button type="button" className="btn-border" onClick={() => navigate(-1)}>??????</button>
                            <button type="button" className="btn-color" onClick={validationCheck}>??????</button>
                        </div>
                    </article>
                </section>
                <input
                    type="file"
                    id="profile"
                    style={{visibility: "hidden"}}
                    ref={fileInputRef}
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={(e) => getProfileFileName(e.target)}
                />
            </ContentWrap>
            <SelectAreaModal
                active={selectAreaModal.active}
                selectArea={teamData.place}
                selectAreaResult={selectAreaResult}/>
        </>
    );
};

export default TeamRegister;