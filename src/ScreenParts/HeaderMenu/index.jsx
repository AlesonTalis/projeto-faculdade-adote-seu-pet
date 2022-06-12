
import React from 'react'

const linkies = [
    {
        name: 'Adote',
        link: '#'
    },
    {
        name: 'Doar',
        link: '#'
    },
    {
        name: 'Sobre',
        link: '#'
    },
    {
        name: 'Contato',
        link: '#'
    }
]

function HeaderMenu() {
  return (
    <div className="Header">
        <div className="Content">
            <a href="#" className="Link">
                <h1>Adote um Pet</h1>
            </a>
            <ul>
                {linkies.map((link, index) => (
                    <li key={index}>
                        <a href={link.link}>{link.name}</a>
                    </li>
                ))}
            </ul>
            <div className="LoginArea">
                <a href="#" className="LinkMenu">
                    <h1>Login</h1>
                </a>
                <span>|</span>
                <a href="#" className="LinkMenu">
                    <h1>Cadastrar</h1>
                </a>
            </div>
        </div>
    </div>
  )
}

export default HeaderMenu