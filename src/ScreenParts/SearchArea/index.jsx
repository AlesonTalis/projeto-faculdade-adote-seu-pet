import React, {
    useState
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
                {data.map((item, index) => (
                    <div className="Content-grid-item" key={index}>
                        <div className="Content-grid-item-image">
                            <img src={item.image} alt=""/>
                        </div>
                        <div className="Content-grid-item-details">
                            <div className="Content-grid-item-details-text">
                                <h2>{item.title}</h2>
                                <p>{item.detalhes}</p>
                            </div>
                            <div className="Content-grid-item-details-buttons">
                                <button>
                                    <FaHeart />
                                </button>
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    chat(index)
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