import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ buttonName, nereye }) => {
    return (
        <Link to={nereye}>
            <button className='button'>
                {buttonName}
            </button>
        </Link>
    )
}

export default Button