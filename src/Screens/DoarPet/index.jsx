import React, {
    useState
} from 'react'

import {
    TextInput,
    DropDownInput,
    Popup
} from '../../ScreenParts'

function DoarPet() {
    const [petImages,setPetImages] = useState('')
    const [petName,setPetName] = useState('')
    const [petType,setPetType] = useState('dog')
    const [petOwner,setPetOwner] = useState('')
    const [petContato,setPetContato] = useState('')

    const [showPopup,setShowPopup] = useState(false)
    const [popupMessage,setPopupMessage] = useState([])

    const addPetImage = () => {
        var address = petType === 'dog' ?
            "https://random.dog/woof.json?ref=apilist.fun" :
            "https://aws.random.cat/meow?ref=apilist.fun"
        
        fetch(address)
            .then(response => response.json())
            .then(data => {
                var result = petType === 'dog' ? data.url : data.file

                setPetImages(result)
            })
    }

    const cadastrarDoacao = () => {
        var pets = JSON.parse(localStorage.getItem('pets'))

        if (pets === null || pets === undefined)
        {
            pets = [
                {
                    id: (Math.floor(Math.random() * 10000001)),
                    _petNome: 'Joaquim',
                    _petType: 'dog',
                    _petContato: '123456789',
                    _petOwner: 'Antonio',
                    _petImage: 'https://random.dog/6824eff1-85f8-4c16-b3ec-93a82b4f554d.jpeg',// joaquim
                }
            ]

            localStorage.setItem('pets', JSON.stringify(pets))
        }

        if (petName && petContato && petImages && petOwner && petType)
        {
            var newPet = {
                id: (Math.floor(Math.random() * 10000001)),
                _petNome: petName,
                _petType: petType,
                _petContato: petContato,
                _petOwner: petOwner,
                _petImage: petImages
            }

            pets.push(newPet)

            console.log(pets)

            localStorage.setItem('pets', JSON.stringify(pets))

            setPopupMessage([
                'Sucesso!',
                `Seu pet ${petName} foi cadastrado com sucesso!`
            ])
            setShowPopup(true)
        }
        else
        {
            setPopupMessage([
                'Atenção!',
                `Preencha todos os campos antes de cadastrar`
            ])
            setShowPopup(true)
        }
    }

    return (
        <div className="Content">
            <div className="Content-area gap-2">
                
                <h1>Doar um pet</h1>

                <div className="flex flex-col w-full md:flex-row items-start gap-4">
                    <div className="Content-object gap-2">
                        <TextInput
                            label='Nome'
                            type='text'
                            submitText={(_petNome) => setPetName(_petNome)}
                            value={petName}
                            placeholder={'Nome do seu Pet'}
                        />
                        <DropDownInput
                            dtitle='Doguinho ou Gatinho?'
                            dvalues={['Cachorro','Gato']}
                            dselected={(v) => {
                                setPetType(v === 0 ? 'dog' : 'cat')
                            }}
                        />
                        <TextInput
                            label='Dono'
                            type='text'
                            submitText={(_dono) => setPetOwner(_dono)}
                            value={petOwner}
                            placeholder={'O nome do atual dono'}
                        />
                        <TextInput
                            type='tel'
                            label='Telefone'
                            submitText={(_telefone) => setPetContato(_telefone)}
                            value={petContato}
                            placeholder='Seu Telefone'
                        />
                        <div className="flex flex-row gap-2">
                            <button
                                type='button'
                                className='btn flex-1'
                                onClick={(e) => {
                                    e.preventDefault()
                                    addPetImage()
                                }}
                            >
                                Selecionar Foto
                            </button>
                            <button
                                className='btn btn-primary flex-1'
                                onClick={(e) => {
                                    e.preventDefault()
                                    cadastrarDoacao()
                                }}
                            >
                                Cadastrar
                            </button>
                        </div>
                    </div>
                    <div className="PetFoto flex-1">
                        <div className="PetImage">
                            {petImages && (<img src={petImages} alt="PetImage" />)}
                        </div>
                    </div>
                </div>
            </div>
            <Popup
                show={showPopup}
                title={popupMessage.length > 0 && popupMessage[0]}
                descricao={popupMessage.length > 1 && popupMessage[1]}
                closeAction={() => {
                    setShowPopup(false)
                }}
            />
        </div>
    )
}

export default DoarPet