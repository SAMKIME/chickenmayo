import React from "react";
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";

const AlarmWrap = styled.aside`
  position: fixed;
  width: 23.75rem;
  background-color: #FFFFFF;
  border: 1px solid #D8D9DA;
  visibility: hidden;
  z-index: 9999;
  


  ul {
    margin: 0;
    padding: 0;
    max-height: 23.75rem;
    overflow-y: scroll;
    
    ::-webkit-scrollbar {
      width: 0.5rem;
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
    
    li {
      display: flex;
      margin-left: 1rem;
      margin-right: 1rem;
      height: 3.75rem;
      align-items: center;
      list-style: none;
      border-bottom: 1px solid #D8D9DA;
      font-family: Spoqa Han Sans Neo, sans-serif;
      font-style: normal;
      font-weight: 700;

      &:last-child {
        border: none;
      }

      .unread {
        display: inline;
        margin-left: 0.8rem;
        margin-right: 0.8rem;
        width: 0.5rem;
        height: 0.5rem;
        background: #DB0000;
        border-radius: 1rem;
      }

      .alarm-content {
        width: 15rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        cursor: pointer;
        font-family: Spoqa Han Sans Neo, sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 0.875rem;

        span {
          color: #364554;
        }
      }

      .alarm-at {
        //position: absolute;
        margin-left: 1rem;
        font-size: 0.875rem;
        right: 1rem;
        color: #C4C4C4;
      }
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

interface MyAlarmProps {
    active: boolean;
    offsetLeft: number;
}

const MyAlarm = ({active, offsetLeft}: MyAlarmProps) => {

        const navigate = useNavigate();

        const renderAlarmList = () => {
            return (
                Array(8).fill("").map((item: any, idx: number) => {
                    return (
                        <li key={idx}>
                            <div className={"unread"}/>
                            <div className="alarm-content" onClick={() => navigate("/team/detail")}>
                                <span>[삼김이]</span> 팀에 <span>이윤호</span> 님이 가입하셨습니다.
                            </div>
                            <div className="alarm-at">1시간 전</div>
                        </li>
                    );
                })
            );
        };

        return (
            <AlarmWrap className={active ? "active" : ""} style={{left: offsetLeft - 380 + 41, top: 64}}>
                <ul>
                    {renderAlarmList()}
                </ul>
            </AlarmWrap>
        );
    }
;

export default MyAlarm;