import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import Header from "../common/Header";
import IconSelect from "../../assets/img/iconSelect.svg";
import BtnClose from "../../assets/img/btnClose.svg";

const InfoWrap = styled.div`
  margin-top: 11rem;
  text-align: center;
  font-family: Spoqa Han Sans Neo, sans-serif;
  padding: 0.5rem 0.5rem 0.5rem 1.25rem;
  font-style: normal;
  font-weight: 500;

  h1 {
    margin: 0;
    font-size: 2rem;
  }

  .login-type {
    margin-top: 0.5rem;

    span {
      font-family: Spoqa Han Sans Neo, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 0.875rem;
      background-color: #FFFFFF;
      border-radius: 50rem;
      padding: 0.25rem 0.5rem;

      &.kakao {
        background-color: #F9E000;
      }

      &.naver {
        background-color: #03C75A;
      }

      &.chrome {
        border: 1px solid #eeeeee;
      }
    }
  }

  .info-wrap {
    margin: 4.375rem auto;
    width: 25rem;
    font-weight: 700;
    font-size: 1.125rem;
    text-align: left;

    input {
      padding: 0.5rem;
      margin-left: 4.68rem;
      border-bottom: 1px solid #263055;
      font-size: 1.125rem;
    }

    .info-gender {
      margin-top: 2rem;

      #info-gender {
        cursor: pointer;
        background-image: url(${IconSelect});
        background-repeat: no-repeat;
        background-position: top 1rem right 0.5rem;
      }
    }

    .info-phone {
      margin-top: 2rem;

      #info-phone {
        margin-left: 1.5rem;
      }
    }
  }

  .withdrawal {
    margin: 4rem auto;
    width: 25rem;
    color: #C4C4C4;
    text-decoration: underline;
    cursor: pointer;
    text-align: right;

    a {
      margin-right: 1.5rem;
    }
  }

  .btn-wrap {
    margin: 4rem auto;
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
`;

const GenderModal = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid #D8D9DA;
  text-align: center;
  visibility: hidden;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    width: 12.5rem;
    background-color: #FFFFFF;
    padding: 1rem;
    border-radius: 12px;
    font-family: Spoqa Han Sans Neo, sans-serif;
    font-style: normal;
    font-weight: 500;

    .modal-header {
      display: flex;
      justify-content: space-between;

      h2 {
        margin: 0;
        font-size: 1.5rem;
      }
    }

    .modal-content {
      margin: 1rem;
      font-size: 1.25rem;

      div:last-child {
        margin-top: 1rem;
      }

      div {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  &.active {
    visibility: visible;
  }
`;

const EditInfo = () => {

    const navigate = useNavigate();

    const [genderModal, setGenderModal] = useState({
        active: false
    });

    const selectGender = (gender: number) => {

        //todo 성별 처리

        setGenderModal({
            active: false
        });
    };

    return (
        <>
            <Header fixed={true}/>
            <InfoWrap>
                <h1>yunho2006@naver.com</h1>
                <div className="login-type"><span className={"kakao"}>KAKAO</span> {"카카오톡"} 계정으로 연결되었습니다.</div>
                <div className="info-wrap">
                    <div className="info-name">
                        <label htmlFor="info-name">이름</label>
                        <input type="text"
                               id="info-name"
                               placeholder="이름을 입력해주세요."/>
                    </div>
                    <div className="info-gender">
                        <label htmlFor="info-gender">성별</label>
                        <input type="text"
                               id="info-gender"
                               placeholder="성별을 선택해주세요."
                               onClick={() => setGenderModal({...genderModal, active: true})}/>
                    </div>
                    <div className="info-phone">
                        <label htmlFor="info-phone">휴대폰 번호</label>
                        <input type="text"
                               id="info-phone"
                               placeholder="휴대폰 번호를 입력해주세요."/>
                    </div>
                </div>
                <div className="withdrawal">
                    <a href={undefined}>탈퇴하기</a>
                </div>
                <div className="btn-wrap">
                    <button type="button" className="btn-border" onClick={() => navigate(-1)}>취소</button>
                    <button type="button" className="btn-color">수정</button>
                </div>
            </InfoWrap>

            <GenderModal className={genderModal.active ? "active" : ""}>
                <div className="modal">
                    <div className="modal-header">
                        <h2>성별</h2>
                        <img className="close-btn" src={BtnClose} alt=".."
                             onClick={() => setGenderModal({...genderModal, active: false})}/>
                    </div>
                    <div className="modal-content">
                        <div onClick={() => selectGender(0)}>남성</div>
                        <div onClick={() => selectGender(1)}>여성</div>
                    </div>
                </div>
            </GenderModal>
        </>
    );
};

export default EditInfo;