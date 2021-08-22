import React from 'react';
import api from '../utils/Api.js';
import Card from './Card';


function Main (props) {
    
    const [userName, setUserName] = React.useState()
    const [userDescription, setUserDescription] = React.useState()
    const [userAvatar, setUserAvatar] = React.useState('')
    const [cards, setCards] = React.useState([])
  
    React.useEffect(() => {
        api.getUserInfo()
            .then((userInfo) => {
                setUserName(userInfo.name)
                setUserDescription(userInfo.about)
                setUserAvatar(userInfo.avatar)
            })
            .catch((err) => {
                console.log(err)
             })

            
        api.getCards()
            .then(loadCards => {
                setCards(loadCards)                
            })
            .catch((err) => {
                console.log(err)
             })
    }, [])
    
    return (
        <main className="content page__content">

            <section className="profile">
                <div className="profile__avatar-box">
                    <img src={userAvatar} alt={`Фотография ${userName + ' ' + userDescription}`} className="profile__avatar" onClick={props.onEditAvatar}/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{userName}</h1>
                    <p className="profile__subtitle">{userDescription}</p>
                    <button type="button" aria-label="Редактировать профиль" className="profile__edit-button" onClick={props.onEditProfile}></button>
                </div>
                <button type="button" aria-label="Добавить информацию" className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>

            <section className="places content__places">
                
                {cards.map(item => {
                   return <Card key={item._id} {...item} item={item} onCardClick={props.onCardClick}/>
                }
                )}
            </section>

        </main>
    )

   
}

export default Main

