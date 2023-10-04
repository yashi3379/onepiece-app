import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CharaData } from "../../atoms/data/CharaData";

export const DeliteModal = (props) => {
    const { id, setIsDeliteModalOpen } = props;
    const navigate = useNavigate();
    const onClickDeliteButton = () => {
        const newCharaData = CharaData.filter((character) => character.id !== id);
        localStorage.setItem("characters", JSON.stringify(newCharaData));
        setIsDeliteModalOpen(false);
        navigate("/character");
    }
    const onClickCancelButton = () => {
        setIsDeliteModalOpen(false);
        navigate("/character");
    }

    return (
        <SOverlay>
            <SModal>
                <p>本当に削除しますか？</p>
                <SButtonWrapper>
                    <SRedButton onClick={onClickDeliteButton}>削除する</SRedButton>
                    <SButton onClick={onClickCancelButton}>キャンセル</SButton>
                </SButtonWrapper>
            </SModal>
        </SOverlay>
    )
}

const SOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.8);
`;

const SModal = styled.div`
    background-color: #fff;
    width: 400px;
    padding: 16px;
    border-radius: 8px;
    position: absolute ;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`;

const SButtonWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
`;

const SButton = styled.button`
    padding: 8px 24px;
    border-radius: 9999px;
    border: none;
    background-color: #40514e;
    color: #fff;
    outline: none;
    &:hover{
        cursor: pointer;
        background-color: #11999e;
    }
`;
const SRedButton = styled.button`
    padding: 8px 24px;
    border-radius: 9999px;
    border: none;
    background-color: #ff0000;
    color: #fff;
    outline: none;
    &:hover{
        cursor: pointer;
        background-color: #ffaaaa;
        color: #000;
    }
`;