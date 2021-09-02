import React from 'react';

import Card from './Card';
import { UserContext } from '../contexts/CurrentUserContext.js';


function Main (props) {
    const currentUser = React.useContext(UserContext)
    
    return (
        <main className="content page__content">

            <section className="profile">
                <div className="profile__avatar-box">
                    <img src={currentUser.avatar} alt={`Фотография ${currentUser.name + ' ' + currentUser.about}`} className="profile__avatar" onClick={props.onEditAvatar}/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{currentUser.name}</h1>
                    <p className="profile__subtitle">{currentUser.about}</p>
                    <button type="button" aria-label="Редактировать профиль" className="profile__edit-button" onClick={props.onEditProfile}></button>
                </div>
                <button type="button" aria-label="Добавить информацию" className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>

            <section className="places content__places">
                {props.cards.map(item => {
                   return <Card key={item._id} item={item} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onClickDeleteCardButton={props.onClickDeleteCardButton}/>
                })}
            </section>

        </main>
    )
}

export default Main

