import React from 'react'
import { ContainerForm, ContainerPage, ImgLogin } from './login-styled'

export function PageLogin() {
    return (
        <ContainerPage >
            <ImgLogin src='https://www.acif.org.br/wp-content/uploads/2019/02/Plano-de-negócio.jpg' alt=''/>
            <ContainerForm >
                <h2>Login</h2>
                <form>
                    <span>Email</span>
                    <input type="text" />
                    <span>Senha</span>
                    <input type="text" />
                    <button>Login</button>
                </form>
            </ContainerForm>
        </ContainerPage>
    )
}
