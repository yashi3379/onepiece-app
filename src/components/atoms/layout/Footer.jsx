import styled from 'styled-components';

export const Footer = () => {
    return (
        <SFooter>
            <p>&copy; 2023 onepiece_catalog</p>
        </SFooter>
    );
}

const SFooter = styled.footer`
    background-color: #3fe0d0;
    color: #fff;
    text-align: center;
    padding: 8px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
`;