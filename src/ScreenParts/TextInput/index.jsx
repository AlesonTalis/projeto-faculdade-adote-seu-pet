import React, {
    useState
} from 'react'

import {FaSearch} from 'react-icons/fa'

function TextInput({
    className = "w-auto self-stretch",
    type = 'text',
    label = '',
    submit = false,
    submitText = (text) => {},
    icon = null
}) {
    const [text, setText] = useState('')
    const [isfocused, setIsfocused] = useState(false)

    return (
        <div className={"Textinput " + className + " " + (isfocused && " Textinput-focused")}>
            <label className="Textinput-title">{label}</label>
            <input 
                className="Textinput-input" 
                type={type}
                value={text}
                onChange={(e) => {
                    setText(e.target.value)
                    submitText(e.target.value)
                }}
                onFocus={() => setIsfocused(true)}
                onBlur={() => setIsfocused(false)}
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
            {icon && <div className="Textinput-icon">{icon}</div>}
        </div>
    )
}

export default TextInput