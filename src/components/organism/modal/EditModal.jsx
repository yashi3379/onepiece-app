import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CharaData } from '../../atoms/data/CharaData';

export const EditModal = (props) => {
    const { id, src, name, explain, setIsEditModalOpen } = props;
    const navigate = useNavigate();
    const[inputSrc, setInputSrc] = useState(src);
    const[inputName, setInputName] = useState(name);
    const[inputExplain, setInputExplain] = useState(explain);

    console.log(id);
    const EditImage = (e) => {
        const file = e.target.files[0];
        const render = new FileReader();
        render.readAsDataURL(file);
        render.onload = () => {
            setInputSrc(render.result);
        }
    }
    const EditInputName = (e) => {
        setInputName(e.target.value);
    }
    const EditInputExplain = (e) => {
        setInputExplain(e.target.value);
    }

    const onClickEditButton = () => {
        const newCharaData = CharaData.map((character) => {
            if(character.id === id){
                return{
                    id: id,
                    img: inputSrc,
                    name: inputName,
                    explain: inputExplain,
                    akumanomi: character.akumanomi,
                    smart: character.smart,
                    tought: character.tought,
                    luck: character.luck
                }
            }else{
                return character;
            }
        })
        localStorage.setItem("characters", JSON.stringify(newCharaData));
        setIsEditModalOpen(false);
        navigate("/character");
    }
    const onClickCancelButton = () => {
        setIsEditModalOpen(false);
        navigate("/character");
    }
    return(
        <SOverlay>
            <SModal>
                <SImageChara src={inputSrc} alt={inputName} />
                <SEditImageInput type="file" accept='image/*' onChange={EditImage} />
                <SEditNameInput type="text" value={inputName} onChange={EditInputName} />
                <SEditExplainInput type="text" value={inputExplain} onChange={EditInputExplain} />
                <SButtonWrapper>
                    <SRedButton onClick={onClickEditButton}>編集する</SRedButton>
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

const SImageChara = styled.img`
    border-radius: 50%;
    height: 160px;
    width: 160px;
`;

const SEditImageInput = styled.input`
    margin-top: 16px;
    width: 90%;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #ddd;
`;

const SEditNameInput = styled.input`
    margin-top: 16px;
    width: 90%;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #ddd;
`;

const SEditExplainInput = styled.input`
    margin-top: 16px;
    width: 90%;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #ddd;
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
        background-color: #ff9999;
        color: #333;
    }
`;