import React from 'react'

import {
    Banner, Search, Contato
} from '../../ScreenParts'


const adotar = [
    {
        titulo: "Os melhores amigos",
        descricao: "Sempre fieis aos seus donos e infinito amor incodicioal",
        image: "./images/cat.svg"
    },
    {
        titulo: "Os melhores amigos",
        descricao: "Nossos pets são amigos de todos, e não só de você. Eles são amigos de todos e não só de você.",
        image: "./images/dog1.svg"
    },
    {
        titulo: "Os melhores amigos",
        descricao: "Nossos pets são amigos de todos, e não só de você. Eles são amigos de todos e não só de você.",
        image: "./images/dog2.svg"
    },
]


function HomeScreen({
    chat = (id) => {}
}) {
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
                <Search chat={chat}/>
                <div className="Content-area">
                    <h1>Por quê adotar?</h1>
                    <div className="Content-object">
                        <div className="Content-customgrid">
                            {adotar.map((adot, index) => (
                                <div className="Content-customgrid-item" key={index}>
                                    <div className="Content-customgrid-item-image">
                                        <img src={adot.image} alt="" />
                                    </div>
                                    <div className="Content-customgrid-item-details">
                                        <h2>{adot.titulo}</h2>
                                        <p>{adot.descricao}</p>
                                    </div>
                                </div>
                            )) }
                        </div>
                    </div>
                </div>
                <Contato/>
            </div>
        </>
    )
}

export default HomeScreen