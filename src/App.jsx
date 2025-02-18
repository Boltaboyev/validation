import React from "react"

import {ToastContainer} from "react-toastify"

import HomeComponent from "./components/home"

const App = () => {
    return (
        <>
            <HomeComponent />
            <ToastContainer position="top-center" />
        </>
    )
}

export default App
