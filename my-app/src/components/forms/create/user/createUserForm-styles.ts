import styled from "styled-components";

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  background-color: #062594;
`;

export const TitleForm = styled.h2`
  margin: 20px;
  font-size: 35px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  gap: 5px;
`;
export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 450px;
  font-size: 20px;
  background-color: #ffffff;
  gap: 20px;
  border-radius: 8px 8px 8px 8px;
`;
export const InputForm = styled.input`
  border-radius: 5px;
  color: black;
  padding-left: 5px;
  width: 100%;
  font-size: 20px;
  background-color: #f0f0f0;
  border: none;
  min-height: 30px;
`;
export const BtnCadastrar = styled.button`
  display: flex;
  margin: 3px;
  height: 45px;
  width: 100%;
  border-radius: 0 0 8px 8px;
  background-color: #e36c0b;
  color: #ffffff;
  border: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease, outline 0.2s ease;

  &:hover {
    cursor: pointer;
    background-color: #ea580c;
    outline: 1px solid #cbd5e1;
  }

  font-size: 25px;
  margin-bottom: 0;
`;
