import React from 'react'

import {
    Banner, Search
} from '../../ScreenParts'

function HomeScreen() {
    return (
        <>
            <Banner />
            <div className="Content">
                <div className="Content-area">
                    <h1>Adote um animal</h1>
                    <div className="Content-object">
                        <p>Em nossos espaços, temos cães e gatos para todos os perfis e lares.</p>
                        <p>Navegue abaixo, para acessar as fotos e tudo que você precisa saber sobre os pets: nome, grupo etário, porte, sexo, se é castrado ou não, se há alguma necessidade especial ou doença, além do perfil social.</p>
                    </div>
                </div>
                <Search/>
            </div>
        </>
    )
}

export default HomeScreen