import React from "react";
import styled from "styled-components";
import{Card} from "../../atoms/card/Card"
import { IconWithName } from "../../molecules/character/IconWithName";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

export const CharactersCard = (props) => {
    const {character} = props;
    const navigate = useNavigate();
    const {userInfo} = useContext(UserContext);
    const modal = userInfo ? userInfo.modal : false;
    
    const onClickMoveIndividual = (e) => {
        if(e.target.tagName === "SPAN" || e.target.tagName === "BUTTON"){
            return;
        }
        navigate(`/character/${character.id}?name=${character.name}&img=${character.img}
        &explain=${character.explain}&akumanomi=${character.akumanomi}&strong=${character.strong}&smart=${character.smart}&tought=${character.tought}&luck=${character.luck}`);
    }
    return(
        //modalがtrueのときはカードをクリックしてもページ遷移しない
        //modalがfalseのときはカードをクリックするとページ遷移する
        <SDiv onClick={modal ? null : onClickMoveIndividual} key={character.id} character={character}>
            <Card>
                <IconWithName src={character.img} name={character.name} id={character.id} explain={character.explain} />
                <SExplain>{character.explain}</SExplain>
            </Card>
        </SDiv>
    )
}

const SDiv = styled.div`
    padding: 8px;
    cursor: pointer;
    &:hover{
        background-color: #f5f5f5;
    }
`;

const SExplain = styled.p`
    text-align: left;
    padding: 0 8px;
    color: #40514e;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 40px;
`;