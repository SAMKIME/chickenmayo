import React from "react";
import styled from "styled-components";
import BtnClose from "../../assets/img/btnClose.svg";

const ModalWrap = styled.aside`
  visibility: hidden;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  
  &.active {
    visibility: visible;
  }

  .modal {
    position: absolute;
    top: calc(50% - 240px);
    left: calc(50% - 150px);
    padding: 1rem 2rem;
    width: 18.75rem;
    height: 30rem;
    background-color: #ffffff;
    border-radius: 12px;

    @media screen and (max-width: 768px) {
      //top: calc(50% - 240px);
      left: calc(50% - 128px);
      //padding: 1rem 2rem;
      width: 12rem;
    }
  }
  
  .close-btn {
    position: absolute;
    top: 1.5rem;
    right: 1rem;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
  
  h2 {
    margin-top: 1rem;
    margin-bottom: 0;
    font-size: 2.125rem;
    font-weight: 500;
    font-style: normal;
  }

  .area-list {
    //margin: 0;
    padding: 1rem;
    list-style: none;
  }

  .area-list li {
    margin-top: 1rem;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    color: #4E5571;

    &:first-child {
      margin-top: 0;
    }
    &.select {
      color: #000000;
      text-decoration: underline;
    }
    &:hover {
      color: #000000;
      text-decoration: underline;
    }
  }

`;

interface SelectAreaModalProps {
    active: boolean;
    selectArea: number;
    selectAreaResult: (type: string, position: number) => void;
}

const SelectAreaModal = ({active, selectArea, selectAreaResult}: SelectAreaModalProps) => {

    const renderAreaList = () => {
        const AREA_LIST: string[] = ["전국", "서울", "경기/강원", "인천", "대전/세종/충청", "대구/경북", "부산/울산/경남", "광주/전라", "제주"];

        return (
            AREA_LIST.map((item: string, idx: number) => {
                return (
                    <li key={idx} className={selectArea === idx ? "select" : ""} onClick={() => selectAreaResult("select", idx)}>{item}</li>
                );
            })
        );
    };

    return (
        <ModalWrap className={active ? "active" : ""}>
            <div className="modal">
                <img className="close-btn" src={BtnClose} alt=".." onClick={() => selectAreaResult("close", -1)}/>
                <div>
                    <h2>지역</h2>
                    <ul className="area-list">
                        {renderAreaList()}
                    </ul>
                </div>
            </div>
        </ModalWrap>
    );
};

export default SelectAreaModal;