import React, {
    useState
} from 'react'

import {
    TextInput
} from '../../ScreenParts'

import {
    MdPassword,
    MdAlternateEmail
} from 'react-icons/md'

import {
    useNavigate,
    Navigate
} from 'react-router-dom'

function LoginUsuario({
    login = (log) => {}
}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    const handleSubmit = () => {
        if (email === "" || password === "") return setMessage('Preencha todos os campos')

        var user = JSON.parse(localStorage.getItem('user'))

        if (!user) {
            login(false)
            return setMessage('Usuario não cadastrado')
        }

        if (user.email === email && user.password === password) {
            login(true)
            // return console.log('Usuario logado')
            localStorage.setItem('userLogged','true')
            navigate('/')
        } else {
            login(false)
            return setMessage('Dados invalidos')
        }
    }

    return (
        <div className="Content">
            <div className="Content-area">
                <h1>Entrar</h1>
                <div className="Content-object max-w-screen-md">
                    <p>Preencha os campos abaixo para entrar em nosso site.</p>
                    <div className="Content-form mt-8">
                        <TextInput label="E-mail" type="email" submitText={(_email) => setEmail(_email)} icon={<MdAlternateEmail/>}/>
                        <TextInput label="Senha" type="password" className="flex-1 w-full" submitText={(_password) => setPassword(_password)} icon={<MdPassword/>}/>
                    </div>
                    <div className="Content-submit mt-4">
                        <button 
                            className="btn "
                            onClick={handleSubmit}
                        >Login</button>
                    </div>
                    <div className="Message py-4">{message}</div>
                </div>
            </div>
        </div>
    )
}

export default LoginUsuario