
import React, {
    useState,
    useEffect
} from 'react'

import {
    Link
} from 'react-router-dom'

const linkies = [
    {
        name: 'Adote',
        link: '/adotar'
    },
    {
        name: 'Doar',
        link: '/doar'
    },
    {
        name: 'Sobre',
        link: '#sobre'
    },
    {
        name: 'Contato',
        link: '#contato'
    }
]

function HeaderMenu({
    isUser=false,
}) {
    const [user, setUser] = useState({})

    useEffect(() => {
        if (!isUser) return
        const user = JSON.parse(localStorage.getItem('user'))
        if(user) {
            setUser(user)
        }

        return () => {
            console.log(user)
        }
    } , [isUser])

    return (
        <div className="Header">
            <div className="Content">
                <Link to="/" className="Link">
                    <h1>Adote um Pet</h1>
                </Link>
                <ul>
                    {linkies.map((link, index) => (
                        <li key={index}>
                            <Link to={link.link}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
                <div className="LoginArea">
                    {!isUser &&(
                        <>
                            <Link to="/login" className="LinkMenu">
                                <h1>Login</h1>
                            </Link>
                            <span>|</span>
                            <Link to="/cadastrar" className="LinkMenu">
                                <h1>Cadastrar</h1>
                            </Link>
                        </>
                    )}
                    {isUser &&(
                        <>
                            <Link to="/logout">
                                <h1>{user.name}</h1>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default HeaderMenu