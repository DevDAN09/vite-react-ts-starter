import styled from "styled-components";

export const HeaderBlock = styled.header`
    display: block;
    position: sticky;
    top: 0;
    height: 64px;
    background-color: white;
`

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    direction: row;
    height: 100%;
    padding: 0 24px;
    max-width: 1440px;
    margin: 0 auto;
`

export const SubMenuBlock = styled.div`
    margin: 0 auto;
    width: 90%;
    max-width: 1296px;
    padding: 10px;
    background-color: #ffffff;
    border-bottom: 1px solid #ddd;
    border-radius: 12px;
`

export const SubMenuContent = styled.div`

    margin: 0 auto;
    display: flex;
    gap: 20px;
`