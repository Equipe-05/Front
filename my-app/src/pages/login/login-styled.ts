import styled from "styled-components";

export const ContainerPage = styled.div `
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`

export const ContainerForm = styled.div `
    all: unset;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 50%;
    background-color: #FFFDFD;
`;

export const ImgLogin = styled.img `
     all: unset;
    height: 100vh;
    width: 50%;
`;

export const FormLogin = styled.form `
     all: unset;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    gap: 15px;
`;

export const ContainerInput = styled.div `
     all: unset;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const InputLogin = styled.input `
     all: unset;
    height: 35px;
    width: 100%;
    font-size: 16px;
    border-radius: 8px;
    padding: 0;
    border: 2px solid #E5E5E5;
`;

export const TitleInput = styled.span `
     all: unset;
    font-size: 16px;
    padding: 0;
`;

export const BtnLogin = styled.button `
    all: unset;
    height: 35px;
    width: 100%;
    font-size: 16px;
    border-radius: 8px;
    background-color: #04C35C;
    text-align: center;
    
`;