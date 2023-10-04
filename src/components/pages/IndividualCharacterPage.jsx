import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";



export const IndividualCharacterPage = () => {
    const location = useLocation();
    const serchParams = new URLSearchParams(location.search);
    const id = serchParams.get("id");
    const name = serchParams.get("name");
    const img = serchParams.get("img");
    const explain = serchParams.get("explain");
    const akumanomi = serchParams.get("akumanomi");
    const strong = serchParams.get("strong");
    const luck = serchParams.get("luck");
    const tought = serchParams.get("tought");
    const smart = serchParams.get("smart");

    window.scrollTo(0, 0);

    return (
            <SContainer>
                <STopCharArea>
                    <SLeftBox>
                        <SImage src={img} alt={name} />
                        <SName>{name}</SName>
                    </SLeftBox>
                    <SRightBox>
                        <SStatus>
                            {akumanomi !== "" && (
                                <SStatusList>
                                    <SStatusTitle>悪魔の実の能力</SStatusTitle>
                                    <SStatusText>{akumanomi}</SStatusText>
                                </SStatusList>
                            )}
                            <SStatusList>
                                <SStatusTitle>戦闘力</SStatusTitle>
                                <SStatusImg src={strong} alt="強さ" />
                            </SStatusList>
                            <SStatusList>
                                <SStatusTitle>運の良さ</SStatusTitle>
                                <SStatusImg src={luck} alt="運" />
                            </SStatusList>
                            <SStatusList>
                                <SStatusTitle>根性</SStatusTitle>
                                <SStatusImg src={tought} alt="根性" />
                            </SStatusList>
                            <SStatusList>
                                <SStatusTitle>かしこさ</SStatusTitle>
                                <SStatusImg src={smart} alt="頭" />
                            </SStatusList>
                        </SStatus>
                    </SRightBox>
                </STopCharArea>
                <SExplainArea>
                    <SExplain>{explain}</SExplain>
                </SExplainArea>
            </SContainer>
    )
}

const SContainer = styled.div`
`;

const STopCharArea = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 32px 0;
    width: 80%;
    margin: 0 auto;
`;

const SLeftBox = styled.div`
    width: 40%;
`;

const SRightBox = styled.div`
    width: 40%;
`;

const SImage = styled.img`
    border-radius: 50%;
    height: 460px;
    width: 460px;
    margin: 0 auto;
`;

const SName = styled.p`
    font-size: 2rem;
    font-weight: bold;
    color: #40514e;
    text-align: center;
    padding-top: 16px;
`;
const SStatus = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 32px 0;
    width: 100%;
    margin: 0 auto;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 0 4px rgba(0,0,0,0.2);
    padding: 16px;
    margin-bottom: 32px;
`;

const SStatusList = styled.li`
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    text-align: center;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    margin-right: 16px;
`;

const SStatusTitle = styled.p`
    margin-bottom: 0px;
`;

const SStatusText = styled.p`
    
`;

const SStatusImg = styled.img`
    height: 60px;
    width: auto;
    border-radius: 50%; 
`;

const SExplainArea = styled.div`
    width: 80%;
    margin: 0 auto;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    padding: 16px;
    margin-bottom: 50px;
`;

const SExplain = styled.p`
    font-size: 1.2rem;
    font-family: 'Noto Sans JP', sans-serif; 
`;

