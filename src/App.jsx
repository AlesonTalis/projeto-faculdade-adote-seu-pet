import { useEffect, useState } from 'react'
import { 
    Routes, 
    Route
} from 'react-router-dom'
import {
    Cadastrar,
    Login,
    Logout,
    Home
} from './Screens'
import {
    Header
} from './ScreenParts'

function App() {

    const [userLogged, setUserLogged] = useState(false)
    const [userName, setUserName] = useState('')

    useEffect(() => {
        if (userLogged) return

        if (localStorage.getItem('userLogged') === 'true')
        {
            setUserLogged(true)
            var user = localStorage.getItem('user')
            console.log(user)
            setUserName(user.name)
        }

        return () => {
            console.log(user)
        }
    }, [userLogged])

    return (
        <div className="App">
            <Header isUser={userLogged}/>
            <Routes>
                <Route 
                    path="/"
                    element={<Home/>}
                />
                <Route
                    path="/cadastrar"
                    element={<Cadastrar/>}
                />
                <Route
                    path="/login"
                    element={<Login login={(logged) => setUserLogged(logged)}/>}
                />
                <Route 
                    path="/logout"
                    element={<Logout logout={(logged) => setUserLogged(logged)}/>}
                />
            </Routes>
        </div>
    )
}

export default App
