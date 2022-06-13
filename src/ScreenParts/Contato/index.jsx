import React, {
    useState
} from 'react'

import {
    TextInput
} from '../../ScreenParts'

function Contato({
    submitContato = (nome, email, telefone, mensagem) => {}
}) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [mensagem, setMensagem] = useState('')

    const [message, setMessage] = useState('')


    return (
        <div className="Content-area">
            <div className="Content-row">
                <div className="Content-image">
                    <img src="./images/phones.svg" alt="" />
                </div>
                <div className="Content-details">
                    <h1>Entre em contato conosco</h1>
                    <div className="Content-form">
                        <TextInput label="Nome" type="text" submitText={(_nome) => setNome(_nome)}/>
                        <TextInput label="E-mail" type="email" submitText={(_email) => setEmail(_email)}/>
                        <TextInput label="Telefone" type="tel" submitText={(_tel) => setTelefone(_tel)}/>
                        <TextInput label="Mensagem" type="text" submitText={(_mes) => setMensagem(_mes)}/>

                        <button className="btn" onClick={(e) => {
                            e.preventDefault()

                            if (nome && email && telefone && mensagem) {
                                console.log(nome, email, telefone, mensagem)
                                submitContato(nome, email, telefone, mensagem)
                                setMessage('Mensagem enviada com sucesso!')
                            }
                            else
                            {
                                setMessage('Preencha todos os campos')
                            }

                        }}>Enviar</button>
                    </div>
                    <div className="Message">{message}</div>
                </div>
            </div>
        </div>
    )
}

export default Contato