import React, { useState } from "react"
import "./Hamburger.css"

const c = console.log.bind(document);
const Hamburger = (props)=> {
    const { navIsOpened } = props
    return (
        <button 
        className={`hamburger ${props.className}`}
        onClick={props.onClick}
        >
            <div className={`hamburger-top bg-white ${navIsOpened && 'active bg-darkGray'}`}></div>
            <div className={`hamburger-middle bg-white ${navIsOpened && 'active bg-darkGray'}`}></div>
            <div className={`hamburger-bottom bg-white ${navIsOpened && 'active bg-darkGray'}`}></div>
        </button>
    )
};

export default Hamburger;