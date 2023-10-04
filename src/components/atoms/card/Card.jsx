import styled from 'styled-components';

export const Card = (props) => {
    const { children } = props;
    return (
        <Scard>
            {children}
        </Scard>
    );
};

const Scard = styled.div`
    background-color: #fff;
    box-shadow: 0 0 4px 2px;
    border-radius: 8px;
    padding: 16px;
`;
