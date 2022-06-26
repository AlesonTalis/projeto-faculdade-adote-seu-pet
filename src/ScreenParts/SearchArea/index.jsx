import React, {
    useState,
    useEffect
} from 'react'
import DropDown from '../DropDownInput'
import TextInput from '../TextInput'

import {
    FaHeart
} from 'react-icons/fa'
import {
    BsFillChatDotsFill
} from 'react-icons/bs'

const animalSpecies = [
    'Cachorro',
    'Gato',
]
const todosAnimais = [
    'Cachorro',
    'Gato',
    'Coelho'
]

// list of unsplash images of cats and dogs
export const data = [
    {
        title: 'Cachorro',
        detalhes: 'Alguns detalhes',
        image:'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
        title: 'Cachorro',
        detalhes: 'Alguns detalhes',
        image:'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
        title: 'Cachorro',
        detalhes: 'Alguns detalhes',
        image:'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
        title: 'Cachorro',
        detalhes: 'Alguns detalhes',
        image:'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
        title: 'Cachorro',
        detalhes: 'Alguns detalhes',
        image:'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
        title: 'Cachorro',
        detalhes: 'Alguns detalhes',
        image:'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
        title: 'Cachorro',
        detalhes: 'Alguns detalhes',
        image:'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
        title: 'Cachorro',
        detalhes: 'Alguns detalhes',
        image:'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
        title: 'Cachorro',
        detalhes: 'Alguns detalhes',
        image:'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
]


function Search({
    chat = (id) => {},
    pagination = false
}) {
    const [animalSpecie, setAnimalSpecie] = useState(0)
    const [animais, setAnimais] = useState(0)

    const loadPets = () => {
        var pets = JSON.parse(localStorage.getItem('pets'))

        if (pets !== null && pets !== undefined)
        {
            setAnimais([...pets])
            console.log(pets)
        }
        else
        {
            console.log(pets)
        }
    }

    useEffect(() => {
        loadPets()

        return () => {}
    }, [])

    return (
        <div className="Content-area">
            <h1>Procure por um pet</h1>
            <div className="Content-object">
                <div className="Content-row">
                    <DropDown 
                        dtitle="Espécie:" 
                        dvalues={animalSpecies}
                        dselected={(index) => setAnimalSpecie(index)}
                    />
                    <DropDown
                        dtitle="Todos os animais:"
                        dvalues={todosAnimais}
                        dselected={(index) => setAnimais(index)}
                    />

                    <TextInput
                        submit={true}
                        submitText={(text) => {
                            console.log(`"${text}" + ${animalSpecies[animalSpecie]} + ${todosAnimais[animais]}`)
                        }}
                    />
                </div>
                <div className="Content-grid">
                    {animais && animais.map((item, index) => (
                        <div className="Content-grid-item" key={index}>
                            <div className="Content-grid-item-image">
                                <img src={item._petImage} alt=""/>
                            </div>
                            <div className="Content-grid-item-details">
                                <div className="Content-grid-item-details-text">
                                    <h2>{item._petNome}</h2>
                                    <p>{item._petOwner}</p>
                                </div>
                                <div className="Content-grid-item-details-buttons">
                                    <button>
                                        <FaHeart />
                                    </button>
                                    <button onClick={(e) => {
                                        e.preventDefault()
                                        chat(item.id)
                                    }}>
                                        <BsFillChatDotsFill />
                                    </button>
                                </div>
                            </div>
                        </div>
                        )
                    )}
                </div>
                
            </div>
        </div>
    )
}

export default Search