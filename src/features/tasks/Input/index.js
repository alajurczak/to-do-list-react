import styled from "styled-components";

export default styled.input`
    display: flex;
    align-items: center;
    height: 40px;
    padding: 10px;
    border: 2px solid ${({theme}) => theme.color.mercury};

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        width: 100%;
    }
`;