import React from 'react';
import styled from "styled-components";
import LoginBg from "../../assets/img/loginBg.jpg";
import SlubLogo from "../../assets/img/slubLogo.svg";
import BtnKakao from "../../assets/img/btnKakao.svg";
import BtnNaver from "../../assets/img/btnNaver.svg";

const LoginWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${LoginBg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const LoginSection = styled.div`
  width: 33.75rem;
  height: 36.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 0.75rem;
  box-shadow: 6px 8px 17px rgba(18, 18, 18, 0.5);
  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    border-radius: inherit;
    box-shadow: none;
  }

  div {
    text-align: center;
  }

  .login-title {
    .title {
      font-size: 1.5rem;
      font-weight: 500;
      color: #364554;
      line-height: 2.172rem;
    }

    .sub-title {
      margin: 1.25rem 0;
      font-size: 1rem;
      font-weight: normal;
      color: #637283;
      line-height: 1.176rem;
    }
  }

  .login-btn {
    margin-top: 3.75rem;

    button {
      font-family: Spoqa Han Sans Neo, sans-serif;
      font-size: 1rem;
      font-weight: 500;
      width: 100%;
      max-width: 16.25rem;
      height: 3.75rem;
      text-align: left;
      padding-left: 4.2rem;
      //border: 1px solid #DEE0E2;
      border-radius: 0.75rem;
      cursor: pointer;
    }

    .btn-kakao {
      color: #1E0F0F;
      background-image: url(${BtnKakao});
      background-repeat: no-repeat;
      background-position: top 1rem left 2rem;
      background-color: #F9E000;
    }

    .btn-naver {
      margin-top: 1.875rem;
      color: #FFFFFF;
      background-image: url(${BtnNaver});
      background-repeat: no-repeat;
      background-position: top 1rem left 2rem;
      background-color: #03C75A;
    }
  }
`;

const Login = () => {
    return (
        <LoginWrapper>
            <LoginSection>
                <div>
                    <div className="login-title">
                        <img src={SlubLogo} alt="slub_logo"/>
                        <p className="sub-title">같이 운동할 사람 찾을 땐 SLUB!</p>
                        <span className="title">스포츠 전문 커뮤니티 슬럽에 <br/>오신 것을 환영합니다!</span>
                    </div>
                    <div className="login-btn">
                        <button type="button" className="btn-kakao">카카오톡 계정으로 로그인</button>
                        <button type="button" className="btn-naver">네이버 아이디로 로그인</button>
                    </div>
                </div>
            </LoginSection>
        </LoginWrapper>
    );
};

export default Login;