import React from "react";
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";
import TempTeamLogo from "../../assets/img/tempTeamLogo.jpg";
import IconEdit from "../../assets/img/iconEdit.svg";
import IconLogout from "../../assets/img/iconLogout.svg";

const InfoWrap = styled.aside`
  position: fixed;
  width: 12.5rem;
  background-color: #FFFFFF;
  border: 1px solid #D8D9DA;
  text-align: center;
  visibility: hidden;
  z-index: 9999;

  figure {
    margin: 1rem 0 0.5rem 0;
    display: inline-block;
    padding: 0;
    width: 4rem;
    height: 4rem;
    border-radius: 50rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .info-name {
    font-family: Spoqa Han Sans Neo, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
  }

  .info-id {
    font-family: Spoqa Han Sans Neo, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;
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

  .btn-wrap {
    padding: 1rem;

    button {
      border: 1px solid #D8D9DA;
      font-family: Spoqa Han Sans Neo, sans-serif;
      padding: 0.5rem 0.5rem 0.5rem 1.25rem;
      font-style: normal;
      font-weight: 700;
      font-size: 0.725rem;
      background-position: top 0.4rem left 0.125rem;
      color: #7B7B77;
      background-repeat: no-repeat;
      border-radius: 4px;
    }

    .btn-edit {
      background-image: url(${IconEdit});
    }

    .btn-logout {
      margin-left: 0.75rem;
      background-image: url(${IconLogout});
    }
  }

  &.active {
    visibility: visible;
  }

  :after {
    display: inline-block;
    position: absolute;
    content: "";
    width: 1.5rem;
    height: 1.5rem;
    top: -14px;
    right: 15px;
    transform: rotate(45deg);
    background-color: #FFFFFF;
    border: 1px solid #D8D9DA;
    border-right: none;
    border-bottom: none;
    z-index: 9999;
  }
`;

interface MyInfoProps {
    active: boolean;
    offsetLeft: number;
}

const MyInfo = ({active, offsetLeft}: MyInfoProps) => {

        const navigate = useNavigate();

        return (
            <InfoWrap className={active ? "active" : ""} style={{left: offsetLeft - 200 + 38, top: 64}}>
                <figure style={{backgroundImage: `url(${TempTeamLogo})`}}/>
                <div className="info-name">이윤호</div>
                <div className="info-id">2123123312</div>
                <div className="login-type"><span className={"kakao"}>KAKAO</span></div>
                <div className="btn-wrap">
                    <button type="button" className="btn-edit" onClick={() => navigate("/info")}>내 정보 수정</button>
                    <button type="button" className="btn-logout">로그아웃</button>
                </div>
            </InfoWrap>
        );
    }
;

export default MyInfo;