import React from 'react'
import { Link } from 'react-router-dom'
import './button.css'

export default function Button() {
    return (
        <Link to=".." className='lnk'>
            Enlace
        </Link>
    )
}
