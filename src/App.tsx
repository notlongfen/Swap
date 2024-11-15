import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Swap from './pages/Swap'
import Example from './example/Example'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Example />} />
            <Route path="/swap" element={<Swap />} />
        </Routes>
    )
}

export default App;