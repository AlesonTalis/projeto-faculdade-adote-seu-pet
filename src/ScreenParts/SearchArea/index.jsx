import React, {
    useState
} from 'react'
import DropDown from '../DropDownInput'
import TextInput from '../TextInput'

const animalSpecies = [
    'Cachorro',
    'Gato',
]
const todosAnimais = [
    'Cachorro',
    'Gato',
    'Coelho'
]

function Search() {
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
                <div className="Content-grid-item">
                    <div className="Content-grid-item-title">
                        <h2>Cachorro</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search