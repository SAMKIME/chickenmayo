import React, {useState} from "react";
import styled from "styled-components";
import BtnSearch from "../../../assets/img/btnSearch.svg";

const SearchBarWrap = styled.div`
  margin: 0 auto;
  width: 37.5rem;
  height: 3.75rem;
  background: #FFFFFF;
  border: 1px solid #263055;
  box-sizing: border-box;
  border-radius: 50px;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.19));

  @media screen and (max-width: 768px) {
    width: 18.75rem;
    height: 3rem;
  }
  

  input {
    width: 50%;
    padding: 1rem 0;
    font-family: Spoqa Han Sans Neo, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    color: #364554;

    &::placeholder {
      color: #364554;
    }

    @media screen and (max-width: 768px) {
      width: 80%;
      padding: 0.8rem 0;
      font-size: 1rem;
    }
    
  }

  .search-btn {
    margin: 0 auto;
    position: absolute;
    top: 10%;
    right: 1.5rem;
    width: 2.813rem;
    height: 2.813rem;
    border-radius: 2rem;

    img {
      margin: 0.625rem auto;
      width: 1.5rem;
      height: 1.5rem;
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

const SearchBar = () => {
    const [searchText, setSearchText] = useState<string>("");

    return (
        <SearchBarWrap>
            <input type="text"
                   id="searchText"
                   placeholder="# 관심 있는 스포츠를 검색해보세요."
                   autoComplete="off"
                   maxLength={16}
                   value={searchText}
                   onChange={(e) => setSearchText(e.target.value)}
            />
            <figure className="search-btn">
                <img src={BtnSearch}/>
            </figure>
        </SearchBarWrap>
    );
};

export default SearchBar;