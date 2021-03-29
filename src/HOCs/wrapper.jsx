import React, { Component } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'


const wrapper = (Component) => {
    return (props) => {
        return (
            <>
                <Header />
                <Component {...props} />
                <Footer />
            </>
        )
    }
  
}

export default wrapper
