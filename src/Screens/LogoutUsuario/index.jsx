import React from 'react'

import {
    useNavigate,
    Navigate
} from 'react-router-dom'

function Logoutusuario({
    logout = (log) => {}
}) {
    const navigate = useNavigate()
    return (
        <div className="Content">
            <div className="Content-area">
                <h1>Deseja realmente realizar logout?</h1>
                <div className="Content-row gap-2">
                    <button 
                        className="btn btn-primary"
                        onClick={() => {
                            localStorage.removeItem('userLogged')
                            logout(false)
                            navigate('/login')
                        }}
                    >Sim</button>
                    <button 
                        className="btn"
                        onClick={() => {
                            navigate('/')
                        }}
                    >Não</button>
                </div>
            </div>
        </div>
    )
}

export default Logoutusuario