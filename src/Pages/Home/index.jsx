import React from 'react'
import HomeBody from "../../Components/HomeBody/index"
import wrapper from "../../HOCs/wrapper"
import "./index.css"


const Home = () => {
    return (
        <div className="home">
            <HomeBody />
        </div>
    )
}

export default wrapper(Home)
