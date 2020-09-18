import React from 'react'
import circlesImg from 'https://firebasestorage.googleapis.com/v0/b/reactcrud-ee3fa.appspot.com/o/circles.png?alt=media&token=e2990ad5-d706-4e34-b3d8-1906737ca23a'
import './styles/Card.css'

class Card extends React.Component {

    render(){
        const {title, description, img, leftColor, rightColor} = this.props //haciendo esto, le asigno todo lo que viene por la props a esas variables entre llaves
        return (
            <div className="card mx-auto Fitness-Card"
            style= {{
                backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`
            }} >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={img} className="float-right"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title} </h1>
                            <p> {description} </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;