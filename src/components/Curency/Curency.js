import React from 'react'
import './Curency.css'

const Curency = (props) => {
    return (
        <li className="item-info">
            <div>
                <img src={props.img} alt={props.title}/>
                <span>{props.title}</span>
            </div>
            <div className="price">
                <p>
                    <span>فروش : </span>
                    <span>{props.sell}</span>
                </p>
                <p>
                    <span>خرید : </span>
                    <span>{props.buy}</span>
                </p>
            </div>
        </li>
    )
}

export default Curency