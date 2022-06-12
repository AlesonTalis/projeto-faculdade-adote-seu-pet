import React from 'react'

import {
    Banner, Search
} from '../../ScreenParts'


const adotar = [
    {
        title: "Os melhores amigos",
        description: "Nossos pets são amigos de todos, e não só de você. Eles são amigos de todos e não só de você.",
        image: "./images/cat.svg"
    },
    {
        title: "Os melhores amigos",
        description: "Nossos pets são amigos de todos, e não só de você. Eles são amigos de todos e não só de você.",
        image: "./images/cat.svg"
    },
    {
        title: "Os melhores amigos",
        description: "Nossos pets são amigos de todos, e não só de você. Eles são amigos de todos e não só de você.",
        image: "./images/cat.svg"
    },
]


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
                <div className="Content-area">
                    <h1>Por quê adotar?</h1>
                    <div className="Content-object">
                        <div className="Content-customgrid">
                            {adotar.map((adot, index) => (<div className="Content-customgrid-item">
                                <div className="Content-customgrid-item-image">
                                    <img src="./images/cat.svg" alt="" />
                                </div>
                                <div className="Content-customgrid-item-details">
                                    <h2>Os melhores amigos</h2>
                                    <p>Nossos pets são amigos de todos, e não só de você. Eles são amigos de todos e não só de você.</p>
                                </div>
                            </div>)) }
                        </div>
                    </div>
                </div>
                <div className="Content-area">
                    <div className="Content-row">
                        <div className="Content-image">
                            <img src="./images/phones.svg" alt="" />
                        </div>
                        <div className="Content-details">
                            <h1>Entre em nosso site</h1>
                            <p>Registre-se com apenas alguns passos em nosso site especializado na busca de animais para adoção</p>
                            <button className="btn">Entrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeScreen