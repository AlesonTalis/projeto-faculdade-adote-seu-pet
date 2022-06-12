import React, {
    useState
} from 'react'

import {
    useNavigate,
    Navigate
} from 'react-router-dom'

import {
    MdPassword,
    MdAlternateEmail
} from 'react-icons/md'
import {
    BiRename
} from 'react-icons/bi'

import {
    TextInput
} from '../../ScreenParts'

function CadastrarUsuario() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordR, setPasswordR] = useState('')
    const [name, setName] = useState('')

    const [message, setMessage] = useState('')

    const navigate = useNavigate()

    const handleSubmit = () => {
        console.log(`email: ${email} password: ${password} passwordR: ${passwordR} name: ${name}`)

        if (email === "" || password === "" || passwordR === "" || name === "") return setMessage('Preencha todos os campos')

        if (password !== passwordR) return setMessage('Senhas não conferem')

        var userCad = {
            email: email,
            password: password,
            name: name
        }

        var user = JSON.parse(localStorage.getItem('user'))

        if (!user) {
            localStorage.setItem('user', JSON.stringify(userCad))
            
            navigate('/login?cad=true')
        }
        else
        {
            setMessage('Usuario já cadastrado')

            navigate('/login')
        }
    }


    return (
        <div className="Content">
            <div className="Content-area">
                <h1>Cadastre-se</h1>
                <div className="Content-object max-w-screen-md">
                    <p>Preencha os campos abaixo para se cadastrar no nosso site.</p>
                    <div className="Content-form mt-8">
                        <TextInput 
                            label="Nome"
                            type="text"
                            submitText={(_name) => setName(_name)}
                            icon={<BiRename/>}
                            />
                        <TextInput 
                            label="E-mail"
                            type="email" 
                            submitText={(_email) => setEmail(_email)}
                            icon={<MdAlternateEmail/>}
                            />
                        <TextInput 
                            label="Senha" 
                            type="password" 
                            submitText={(_password) => setPassword(_password)}
                            className="flex-1 w-full"
                            icon={<MdPassword/>}
                            />
                        <TextInput 
                            label="Confirmar senha" 
                            type="password" 
                            submitText={(_passwordR) => setPasswordR(_passwordR)}
                            className="flex-1 w-full" 
                            icon={<MdPassword/>}
                            />
                    </div>
                    <div className="Content-submit mt-4">
                        <button 
                            className="btn "
                            onClick={handleSubmit}
                        >Cadastrar</button>
                    </div>
                    <div className="Message py-4">{message}</div>
                </div>
            </div>
        </div>
    )
}

export default CadastrarUsuario