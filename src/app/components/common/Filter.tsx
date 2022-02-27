import React, {useState} from "react";
import styled from "styled-components";
import IconArea from "../../assets/img/iconArea.svg";
import IconSports from "../../assets/img/iconSports.svg";
import SelectAreaModal from "./SelectArea";

const FilterDiv = styled.div`
  margin: 0 auto;

  div {
    position: relative;
    padding: 9px 12px 8px 36px;
    margin: 0 auto;
    display: inline-block;
    min-width: 6.25rem;
    height: 2.5rem;
    box-sizing: border-box;
    border-radius: 20px;
    font-family: Spoqa Han Sans Neo, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
    cursor: pointer;
  }

  .filter-area {
    background-image: url(${IconArea});
    background-color: #FFFFFF;
    background-repeat: no-repeat;
    background-position: top 2px left 6px;
    border: 1px solid #4E5571;
    color: #4E5571;
  }

  .filter-sports {
    margin-left: 0.625rem;
    background-image: url(${IconSports});
    background-color: #354784;
    background-repeat: no-repeat;
    background-position: top 8px left 10px;
    border: 1px solid #354784;
    color: #FFFFFF;
  }
`;

const Filter = () => {
    const AREA_LIST: string[] = ["전국", "서울", "경기/강원", "인천", "대전/세종/충청", "대구/경북", "부산/울산/경남", "광주/전라", "제주"];

    const [area, setArea] = useState<number>(0);
    const [sports, setSports] = useState("스포츠");
    const [selectAreaModal, setSelectAreaModal] = useState({
        active: false
    });

    /*
     * 지역 선택 모달 처리
     */
    const selectAreaResult = (type: string, position: number) => {
        setSelectAreaModal({
            active: false
        });

        if (type === "select") {
            setArea(position);
        }
    };


    return (
        <>
            <FilterDiv>
                <div className="filter-area" onClick={() => setSelectAreaModal({active: true})}>
                    {AREA_LIST[area]}
                </div>
                <div className="filter-sports">
                    {sports}
                </div>
            </FilterDiv>

            <SelectAreaModal
                active={selectAreaModal.active}
                selectArea={area}
                selectAreaResult={selectAreaResult}/>
        </>
    );
};

export default Filter;