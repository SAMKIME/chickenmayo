import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import HeaderLogo from "../../assets/img/headerLogo.svg";
import BtnAlarm from "../../assets/img/btnAlarm.svg";
import BtnInfo from "../../assets/img/btnInfo.svg";

const HeaderWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 3.75rem;
  left: 0;
  top: 0;
  background: #F8F9FA;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(165, 170, 178, 0.3);
  z-index: 9999;

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

    &:hover {
      background: #E0E0E0;
    }

    &.active {
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
}

const Header = ({fixed}: HeaderProps) => {

    return (
        <HeaderWrap style={{position: fixed ? "fixed" : "absolute"}}>
            <div className="logo">
                <Link to={"/main"}>
                    <img src={HeaderLogo}/>
                </Link>
            </div>
            <UtilWrap>
                <li className="active">
                    <a className="btn_alarm">
                    <span>
                        <img src={BtnAlarm}/>
                    </span>
                    </a>
                </li>
                <li>
                    <a className="btn_info">
                    <span>
                        <img src={BtnInfo}/>
                    </span>
                    </a>
                </li>
            </UtilWrap>
        </HeaderWrap>
    );
};

export default Header;