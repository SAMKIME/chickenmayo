import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import HeaderLogo from "../../assets/img/headerLogo.svg";
import HeaderWhiteLogo from "../../assets/img/headerLogo_w.svg";
import BtnAlarm from "../../assets/img/btnAlarm.svg";
import BtnWhiteAlarm from "../../assets/img/btnAlarm_w.svg";
import BtnInfo from "../../assets/img/btnInfo.svg";
import BtnWhiteInfo from "../../assets/img/btnInfo_w.svg";
import MyAlarm from "./MyAlarm";
import MyInfo from "./MyInfo";

const HeaderWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 3.75rem;
  left: 0;
  top: 0;
  background-color: #F8F9FA;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(165, 170, 178, 0.3);
  z-index: 9999;


  &.team { //## 팀 헤더
    background-color: #364554;
  }

  .logo {
    margin: 0 auto;
    position: relative;

    img {
      width: 4.625rem;
      height: 2.4rem;
    }
  }
`;

const UtilWrap = styled.ul`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
    margin: 0 0.375rem;
    width: 2rem;
    height: 2rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    border-radius: 2rem;

    &:hover, &.active {
      background: #E0E0E0;
    }

    &.new-alarm {
      ::after {
        content: '';
        margin-bottom: 1.375rem;
        margin-left: 1.375rem;
        position: absolute;
        width: 0.375rem;
        height: 0.375rem;
        background: #DB0000;
        border-radius: 1rem;
      }
    }
  }

  .btn_alarm {
    cursor: pointer;

    img {
      width: 1.875rem;
      height: 1.875rem;
    }
  }

  .btn_info {
    cursor: pointer;

    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

interface HeaderProps {
    fixed?: boolean;
    teamHeaderClass?: boolean;
}

const Header = ({fixed, teamHeaderClass}: HeaderProps) => {
    const [myAlarmModal, setMyAlarmModal] = useState({
        active: false,
        offsetLeft: 0,
    });
    const [myInfoModal, setMyInfoModal] = useState({
        active: false,
        offsetLeft: 0,
    });

    const handleMyModal = (e: any, type: string) => {
        if (type === "alarm") {
            setMyAlarmModal({
                active: !myAlarmModal.active,
                offsetLeft: e.target.offsetLeft,
            });
        } else {
            setMyInfoModal({
                active: !myInfoModal.active,
                offsetLeft: e.target.offsetLeft,
            });
        }
    };

    return (
        <>
            <HeaderWrap style={{position: fixed ? "fixed" : "absolute"}} className={teamHeaderClass ? " team" : ""}>
                <div className="logo">
                    <Link to={"/main"}>
                        <img src={teamHeaderClass ? HeaderWhiteLogo : HeaderLogo}/>
                    </Link>
                </div>
                <UtilWrap>
                    <li className={"new-alarm" + (myAlarmModal.active ? " active" : "")}>
                        <a className="btn_alarm" onClick={(e) => handleMyModal(e, "alarm")}>
                    <span>
                        <img src={teamHeaderClass ? BtnWhiteAlarm : BtnAlarm}/>
                    </span>
                        </a>
                    </li>
                    <li className={myInfoModal.active ? " active" : ""}>
                        <a className="btn_info" onClick={(e) => handleMyModal(e, "info")}>
                    <span>
                        <img src={teamHeaderClass ? BtnWhiteInfo : BtnInfo}/>
                    </span>
                        </a>
                    </li>
                </UtilWrap>
            </HeaderWrap>
            <MyAlarm active={myAlarmModal.active}
                     offsetLeft={myAlarmModal.offsetLeft}/>
            <MyInfo active={myInfoModal.active}
                    offsetLeft={myInfoModal.offsetLeft}/>
        </>
    );
};

export default Header;