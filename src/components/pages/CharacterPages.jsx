import React from "react";
import styled from "styled-components";
import { CharactersCard } from "../organism/character/CharactersCard";
import { CharaData } from "../atoms/data/CharaData";

export const CharacterPages = () => {
    
    return (
        <SContainer>
            <h1>キャラクター一覧</h1>
            <SCharacterArea>
                {CharaData.map((character) => (
                    <CharactersCard key={character.id} character={character} />
                ))}
            </SCharacterArea>
        </SContainer>
    )
}

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`;

const SCharacterArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 36px;
`;