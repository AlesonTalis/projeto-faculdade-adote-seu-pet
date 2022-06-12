import React, {
    useState
} from 'react'

import {FaSearch} from 'react-icons/fa'

function TextInput({
    className = "w-auto self-stretch",
    title = '',
    submit = false,
    submitText = (text) => {}
}) {
    const [text, setText] = useState('')

    return (
        <div className={"Textinput " + className}>
            <label className="Textinput-title">{title}</label>
            <input 
                className="Textinput-input" 
                type="text" 
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            {submit && <button 
                className="Textinput-submit"
                onClick={(e) => {
                    e.preventDefault()
                    submitText(text)
                }}
            >
                <FaSearch />
            </button>}
        </div>
    )
}

export default TextInput