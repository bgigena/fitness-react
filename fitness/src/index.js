import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import Exercises from './pages/Exercises'

import 'bootstrap/dist/css/bootstrap.css'



const container = document.getElementById('root')

ReactDOM.render(<Exercises/>

, container) //recibe 2 elementos, que renderea y donde lo renderea // con esas variables, puedo mandarle valores que despues recibo por el props
