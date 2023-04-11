import React from 'react'
import { BtnLogin, ContainerForm, ContainerInput, ContainerPage, FormLogin, ImgLogin, InputLogin, TitleInput } from './login-styled'

export function PageLogin() {
    return (
        <ContainerPage >
            <ImgLogin src='https://www.acif.org.br/wp-content/uploads/2019/02/Plano-de-negócio.jpg' alt='' />
            <ContainerForm >
                <h2>Login</h2>
                <FormLogin>
                    <ContainerInput>
                        <TitleInput>Email</TitleInput>
                        <InputLogin type="text" placeholder='Ex: nome@gmail.com'/>
                    </ContainerInput>

                    <ContainerInput>
                        <TitleInput>Senha</TitleInput>
                        <InputLogin type="password" placeholder='Ex: senha123'/>
                    </ContainerInput>
                    <ContainerInput>
                    <BtnLogin>Login</BtnLogin>
                    </ContainerInput>
                </FormLogin>
            </ContainerForm>
        </ContainerPage>
    )
}
