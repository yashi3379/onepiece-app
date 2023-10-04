import React,{useContext} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {UserContext} from '../../providers/UserProvider';
import Logo from '../../../images/titlelogo.png';

export const Header = () => {
     const navigate = useNavigate();
     const{setUserInfo} = useContext(UserContext);
     
     const onClickReturn = () => navigate('/');
     const onClickuser = () => {
        setUserInfo({isAdmin: false});
        navigate('/character');
     }
     const onClickadmin = () => {
        setUserInfo({isAdmin: true});
        navigate('/character');
     }
     return(
        <SHeader>
            <SContainer>
                <SLeftLogo>
                    <SLogoButton onClick={onClickReturn}/>
                </SLeftLogo>
                <SRightLogo>
                    <SUserButton onClick={onClickuser}>User</SUserButton>
                    <SAdminButton onClick={onClickadmin}>管理者</SAdminButton>
                </SRightLogo>
            </SContainer>
        </SHeader>
     )
}

const SHeader = styled.header`
    background-color: rgba(63,224,208,0.5);
    color: #fff;
    text-align: center;
`;

const SContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
`;
const SLeftLogo = styled.div`
    margin-left: 8px;
`;

const SRightLogo = styled.div`
    margin-right: 8px;
`;

const SLogoButton = styled.button`
background-image: url(${Logo});
background-size: contain;
background-repeat: no-repeat;
background-position: center;
border: none;
width: 150px;
height: 70px;
cursor: pointer;
background-color: transparent;
`;

const SUserButton = styled.button`
border: none;
background-color: #ff0000;
color: #fff;
font-size: 1rem;
font-weight: bold;
border-radius: 8px;
padding: 8px;
margin-right: 8px;
width: 80px;
height: 50px;
margin-top: 8px;
&:hover {
    background-color: #fff;
    color: #ff0000;
    cursor: pointer;
}
`;
const SAdminButton = styled.button`
background-color: #fff;
font-size: 1rem;
border: none;
padding: 8px;
border-radius: 8px;
width: 80px;
height: 50px;
margin-top: 8px;
&:hover {
    background-color: #ffeeee;
    color: #333;
    cursor: pointer;
}
`;
