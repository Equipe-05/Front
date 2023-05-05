import styled from "styled-components";

export const ContainerPage = styled.div`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const ContainerForm = styled.div`
  all: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 50%;
  background-color: #062594;
`;

export const ImgLogin = styled.img`
  all: unset;
  height: 100vh;
  width: 50%;
`;

export const FormLogin = styled.form`
  all: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  gap: 15px;
`;

export const ContainerInput = styled.div`
  all: unset;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InputLogin = styled.input`
  all: unset;
  height: 35px;
  width: 100%;
  font-size: 16px;
  border-radius: 8px;
  padding: 0;
  border: 2px solid #e5e5e5;
`;

export const TitleInput = styled.span`
  all: unset;
  font-size: 16px;
  padding: 0;
`;

export const BtnLogin = styled.button`
  all: unset;
  height: 35px;
  width: 100%;
  font-size: 16px;
  border-radius: 8px;
  background-color: #04c35c;
  text-align: center;

  transition: color 0.2s ease, background-color 0.2s ease, outline 0.2s ease;

  &:hover {
    cursor: pointer;
    color: #04c35c;
    background-color: #e5e5e5;
    outline: 1px solid #04c35c;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
