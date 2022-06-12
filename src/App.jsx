import { useState } from 'react'
import { 
    Routes, 
    Route
} from 'react-router-dom'
import {
    Home
} from './Screens'
import {
    Header
} from './ScreenParts'

function App() {

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route 
                    path="/"
                    element={<Home/>}
                />
            </Routes>
        </div>
    )
}

export default App
