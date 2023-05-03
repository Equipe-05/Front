import React, { FormEvent } from 'react'
import { api } from '../../../../utils/api/api';
import { BtnCadastrar, FormStyle, InputContainer, InputForm, TitleForm } from '../user/createUserForm-styles';

export function CalledForm() {

    async function HandleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const newCalled = {
            description: e.currentTarget.description.value
        };

        const calledData = await api.postCalled(newCalled)
    }
    return (
        <div>
            <FormStyle onSubmit={HandleSubmit}>
                <TitleForm>Abrir Chamado</TitleForm>
                <InputContainer>
                    <label>Descrição do Problema</label>
                    <InputForm />
                </InputContainer>
                <BtnCadastrar>ABRIR CHAMADO</BtnCadastrar>
            </FormStyle>
        </div>
    )
}
