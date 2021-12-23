import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    background: var(--darkGrey);
    align-items: center;
    height: 100px;
    padding: 0 20px
`;

export const Content = styled.div`
    position: relative;
    color: var(--white);
    margin: 0 auto;
    width: 100%;
    height: 48px;
    max-width: var(--maxWidth);
    background: var(--medGrey);
    border-radius: 40px;

    img {
        position: absolute;
        top: 12px;
        left: 15px;
        width: 30px;
    }

    input {
        font-size: var(--fontBig);
        position: absolute;
        left: 0;
        margin: 8px 0;
        padding: 0 0 0 60px;
        border: 0;
        width: 95%;
        background: transparent;
        height: 37px;
        color: var(--white);

        :focus {
            outline: none;    
        }
    }
`;