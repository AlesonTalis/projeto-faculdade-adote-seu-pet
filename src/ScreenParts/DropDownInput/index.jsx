import React, {
    useState
} from 'react'


import {FaArrowDown} from 'react-icons/fa'


function DropDown({
    dtitle = "", 
    dvalues, 
    showIcon = true,
    dselected = (index) => {}
}) {
    const [opened, setOpened] = useState(false)

    // console.log(dvalues)
    return (
        <div 
            className={"Dropdown" + (opened ? " opened" : "")}
        >
            <button 
                className="Dropdown-title row items-center gap-2"
                onClick={() => setOpened(o => !o)}
            >
                <span>{dtitle}</span>
                {showIcon && <FaArrowDown />}
            </button>
            <div className="Dropdown-content">
                {Array.isArray(dvalues) && dvalues.map((value, index) => (
                        <button 
                            className="Dropdown-item" 
                            key={index} 
                            onClick={() => {
                                dselected(index)
                                setOpened(false)
                            }}
                        >{value}</button>
                    )
                )}
            </div>
        </div>
    )
}

export default DropDown