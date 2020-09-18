import React from 'react'
import './styles/AddButton.css'
import buttonImg from 'https://firebasestorage.googleapis.com/v0/b/reactcrud-ee3fa.appspot.com/o/add.png?alt=media&token=ff0881bd-739e-4572-9ae9-317f78aecbc1'
import { Link } from 'react-router-dom'

const AddButton = () => (
    <Link to="/exercise/new">
        <img src={buttonImg} className="Fitness-Add" alt="exercise"/>
    </Link>
)

export default AddButton