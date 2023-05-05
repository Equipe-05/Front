import styled from "styled-components";

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  background-color: #062594;`

export const TitleForm = styled.h2`
    margin: 20px;
    font-size: 35px;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    gap: 5px;
`
export const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 450px;
    font-size: 20px;
    background-color: #FFFFFF;
    gap: 20px;
    border-radius: 8px 8px 8px 8px;
`
export const InputForm = styled.input`
    border-radius: 5px;
    color: black;
    padding-left: 5px;
    width: 100%;
    font-size: 20px;
    background-color: #F0F0F0;
    border: none;
    min-height: 30px;
`
export const BtnCadastrar = styled.button`
    display: flex;
    margin: 3px;
    height: 45px;
    width: 100%;
    border-radius: 0 0 8px 8px;
    background-color: #E36C0B;
    color: #FFFFFF;
    border: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover {
      background-color: #FFFF;
    }
    font-size: 25px;
    margin-bottom: 0;
`