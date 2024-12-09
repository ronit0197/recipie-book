import React from 'react'
import Header from '../Components/Header'
import Allrecipies from '../Components/Allrecipies'

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Allrecipies />
        </div>
    )
}

export default Home