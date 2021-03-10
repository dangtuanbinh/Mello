import React, { Component } from 'react'
import Header from '../Components/Header'


const wrapper = (Component) => {
    return (props) => {
        return (
            <>
                <Header />
                <Component {...props} />
            </>
        )
    }
  
}

export default wrapper
