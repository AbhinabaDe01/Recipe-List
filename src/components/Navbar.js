import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'


import './Navbar.css'

import Searchbar from './Searchbar'


export default function Navbar() {

    const {color} = useTheme()

    return (
        <div className = "navbar" style={{background: color}}>
            <nav>
                <Link to = "/" className = "brand">
                <h1>Cooking Ninja</h1>
                </Link>
                <div className='rc'>
                <Searchbar />
                <Link to = "/create" className='create'>
                Create Recipe
                </Link>
                </div>
                
                
                
            </nav>
        </div>
    )
}
