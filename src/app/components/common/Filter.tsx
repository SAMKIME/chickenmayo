import React, {useState} from "react";
import styled from "styled-components";
import IconArea from "../../assets/img/iconArea.svg";
import IconSports from "../../assets/img/iconSports.svg";
import SelectAreaModal from "./SelectArea";
import BtnSearch from "../../assets/img/btnSearch.svg";

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

  .filter-search {
    padding: 0 0.625rem;

    .filter-input {
      width: 17.5rem;
      height: 2.5rem;
      padding: 1rem 1.75rem;
      background: #FFFFFF;
      border: 1px solid #263055;
      box-sizing: border-box;
      border-radius: 50px;
      font-family: Spoqa Han Sans Neo, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: #364554;

      &::placeholder {
        color: #364554;
      }
    }

    .search-btn {
      margin: 0 auto;
      position: absolute;
      top: 10%;
      right: 1.5rem;
      width: 1.875rem;
      height: 1.875rem;
      border-radius: 2rem;

      img {
        margin: 0.4rem auto;
        width: 1.2rem;
        height: 1.2rem;
      }

      &:hover {
        background-color: #F4F4F4;
      }

      @media screen and (max-width: 768px) {
        width: 2rem;
        height: 2rem;
        top: 14%;
        right: 0.5rem;

        img {
          margin: 0.5rem auto;
          width: 1rem;
          height: 1rem;
        }
      }
    }
`;

interface FilterProps {
    searchTeamList?: () => void;
}

const Filter = ({searchTeamList}: FilterProps) => {
    const AREA_LIST: string[] = ["전국", "서울", "경기/강원", "인천", "대전/세종/충청", "대구/경북", "부산/울산/경남", "광주/전라", "제주"];

    const [area, setArea] = useState<number>(0);
    const [sports, setSports] = useState("스포츠");
    const [searchText, setSearchText] = useState("");
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
                {
                    searchTeamList &&
                    <div className="filter-search">
                        <input type="text"
                               className="filter-input"
                               id="searchText"
                               placeholder="검색어를 입력해주세요."
                               value={searchText}
                               maxLength={16}
                               onChange={(e) => setSearchText(e.target.value)}/>
                        <figure className="search-btn" onClick={() => searchTeamList()}>
                            <img src={BtnSearch}/>
                        </figure>
                    </div>
                }
            </FilterDiv>
            <SelectAreaModal
                active={selectAreaModal.active}
                selectArea={area}
                selectAreaResult={selectAreaResult}/>
        </>
    );
};

export default Filter;