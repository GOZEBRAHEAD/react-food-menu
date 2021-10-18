import React from 'react';
import "./Card.css";

const Card = ({objData}) => {

    return (
        <div className="card">
            <img className="card__image" src={`/assets/img/${objData.img}`} alt="" />
            <div className="card__text">
                <div className="card__title">
                    <p>{objData.name}</p>
                    <p>${objData.price}</p>
                </div>
                <p className="card__description">{objData.description}</p>
            </div>
        </div>
    );
};

export default Card;
