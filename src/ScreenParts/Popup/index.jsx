import React, {
    useState,
    useEffect
} from 'react'

import {
    AiFillCloseCircle
} from 'react-icons/ai'

function Popup({
    title,
    descricao,
    closeAction = () => null,
    show = false
}) {
    const [opened, setOpened] = useState(show)

    useEffect(() => {
        if (show === true)
            setOpened(show)
    
        return () => {}
    }, [show])
    

    return opened ? (<div className={"Popup"}>
            <div className="PopupContent">
                <div className="PopupTitle">
                    <h1>{title}</h1>
                    <button
                        className='btn btn-primary btn-close ml-auto mr-4'
                        onClick={(e) => {
                            setOpened(false)
                            closeAction()
                        }}  
                    >
                        <AiFillCloseCircle/>
                    </button>
                </div>
                <div className="PopupDescricao">
                    <p>{descricao}</p>
                </div>
            </div>
        </div>) : (<></>)
}

export default Popup