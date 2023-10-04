import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import backImage from '../../images/backgroundimage.png'
import backChara from "../../images/background_chara.png";
import backTitle from "../../images/titlelogo.png";


export const Top = () => {
    const navigate = useNavigate();

    const onClickCharacter = () => navigate("/character");

    return(
        <SContainer>
            <SCharaImg src={backChara} alt="背景キャラクター"/>
            <STitleImg src={backTitle} alt='タイトル'/>
            <SButton onClick={onClickCharacter}>探しにいく！</SButton>
        </SContainer>
    )
}

const SContainer = styled.div`
    text-align: center;
    background-image: url(${backImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    min-height: 100vh;
    position: relative;
`;

const SCharaImg = styled.img`
    width: 80%;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%,-50%);
    animation: slide-in 2s ease-in-out forwards;
    @keyframes slide-in {
        0% {
            transform: translate(-50%, -150%);
        }
        100% {
            transform: translate(-50%, -50%);
        }
    }
`;

const STitleImg = styled.img`
    width: 30%;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
`;

const SButton = styled.button`
    border: none;
    background-color: #ff0000;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    position: absolute;
    top: 73%;
    left: 50%;
    transform: translate(-50%,-50%);
    &:hover {
        background-color: #fff;
        color: #ff0000;
        cursor: pointer;
    }   
`;