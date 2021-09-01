import React from 'react';
import { UserContext } from '../contexts/CurrentUserContext.js';

function Card ({item, onCardClick, onCardLike, onCardDelete}) {
    const currentUser = React.useContext(UserContext);

    const isOwn = item.owner._id === currentUser._id;
    const isLiked = item.likes.some(i => i._id === currentUser._id)
    
    const handleCardClick = () => {
        onCardClick(item)
    }

    const handleLikeCard = () => {
        onCardLike(item)
    }

    const handleDeleteCard = () => {
        onCardDelete(item)
    }



    return (
        <article className="place">
            <button type="button" aria-label="Удалить карточку" className={`place__delete-button ${!isOwn ? 'place__delete-button-hidden' : ''} `} onClick={handleDeleteCard}></button>
            <img src={item.link} alt={item.name} className="place__foto" onClick={handleCardClick}/>
            <div className="place__description">
                <h2 className="place__title">{item.name}</h2>
                <div className="place__elements-like">
                    <button 
                        type="button" 
                        aria-label="Поставить лайк" 
                        className={`place__like-button ${isLiked ? 'place__like-button_active' : ''}`} 
                        onClick={handleLikeCard}>
                    </button>
                    <span className="place__like-counter">{item.likes.length}</span>
                </div>
            </div>
        </article>
    )
}

export default Card