import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../providers/UserProvider';
import { DeliteModal } from '../../organism/modal/DeliteModal';
import { EditModal } from '../../organism/modal/EditModal';

export const IconWithName = (props) => {
    const { id, src, name, explain } = props;
    const context = useContext(UserContext);
    const setUserInfo = context.setUserInfo;
    const isAdmin = context.userInfo ? context.userInfo.isAdmin : false;

    const [isDeliteModalOpen, setIsDeliteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const onClickDeliteButton = (e) => {
        e.stopPropagation();
        setUserInfo({modal: true});
        setIsDeliteModalOpen(true);
    }
    const onClickEditButton = (e) => {
        e.stopPropagation();
        setUserInfo({modal: true});
        setIsEditModalOpen(true);
    }
    return (
        <>
            <SContainer>
                <SImg src={src} alt={name} />
                <SName>{name}</SName>
                {isAdmin && <SEdit onClick={onClickEditButton}>編集する</SEdit>}
                <br />
                {isAdmin && <SDeliteButton onClick={onClickDeliteButton}>削除する</SDeliteButton>}
            </SContainer>
            {isDeliteModalOpen && <DeliteModal id={id} setIsDeliteModalOpen={setIsDeliteModalOpen} />}
            {isEditModalOpen && <EditModal id={id} name={name} explain={explain} src={src} setIsEditModalOpen={setIsEditModalOpen} />}
        </>
    )
}
const SContainer = styled.div`
    text-align: center;
`;

const SImg = styled.img`
    border-radius: 50%;
    height: 160px;
    width: 160px;
`;

const SName = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: #40514e;
    padding-top: 14px;
`;

const SEdit = styled.span`
    text-decoration: underline;
    color: #aaa;
    cursor: pointer;
`;

const SDeliteButton = styled.button`
    background-color: #40514e;
    border: 1px solid #ddd;
    color: #fff;
    padding: 5px 24px;
    outline: none;
    border-radius: 9999px;
    &:hover {
        background-color: #405fee;
        cursor: pointer;
    }
`;