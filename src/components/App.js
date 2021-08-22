import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null)
   
    React.useEffect(() => {
        function handleCloseEscape (evt) {
            if (evt.key === 'Escape') {
                closeAllPopups()
            } 
        }
        
        document.addEventListener('keydown', handleCloseEscape);

    }, [])

    function closePopupClickOverlay (evt) {
        if (evt.target.classList.contains('popup_opened')) {
            closeAllPopups()
        }
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard(false)
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
    }

    function handleAddPlaceClick()  {
        setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
    }

    function onCardClick(card) {
        setSelectedCard(card)
    }
    
    
    
return (
    
    <div className="page">

        <Header />
        
        <Main 
            onEditAvatar={handleEditAvatarClick} 
            onEditProfile={handleEditProfileClick} 
            onAddPlace={handleAddPlaceClick}
            onCardClick = {onCardClick}
        />

        <Footer />

        
        <PopupWithForm
            name="edit-profile"
            title="Редактировать профиль"
            isOpen={isEditProfilePopupOpen}
            onClose ={closeAllPopups}
            buttonText = 'Сохранить'
            closePopupClickOverlay = {closePopupClickOverlay}
        >           
            <input type="text" name="name" id="name" placeholder="введите имя" className="popup__input popup__input_type_name" minLength="2" maxLength="40" required />
            <span className="popup__text-error name-error"></span>
            <input type="text" name="profession" id="profession" placeholder="введите профессию" className="popup__input popup__input_type_profession" minLength="2" maxLength="200" required />
            <span className="popup__text-error profession-error"></span> 
        
        </PopupWithForm>


        <PopupWithForm 
            name="edit-avatar"
            title="Обновить аватар"
            isOpen={isEditAvatarPopupOpen}
            onClose ={closeAllPopups}
            buttonText = 'Сохранить'
            closePopupClickOverlay = {closePopupClickOverlay}
        >
            <input type="url" name="linkAvatar" id="linkAvatar" placeholder="Ссылка на картинку" className="popup__input popup__input_type_link" minLength="2" maxLength="200" required />
            <span className="popup__text-error linkAvatar-error"></span>
        
        </PopupWithForm>
        

        <PopupWithForm 
            name="add-card"
            title="Новое место"
            isOpen={isAddPlacePopupOpen}
            onClose ={closeAllPopups}
            buttonText = 'Сохранить'
            closePopupClickOverlay = {closePopupClickOverlay}
        >
            <input type="text" name="title" id="title" placeholder="Название"  className="popup__input popup__input_type_title-card" minLength="2" maxLength="30" required />
            <span className="popup__text-error title-error"></span>
            <input type="url" name="link" id="link" placeholder="Ссылка на картинку"  className="popup__input popup__input_type_link-card" required />
            <span className="popup__text-error link-error"></span>
        
        </PopupWithForm>
        

        <PopupWithForm 
            name="delete-card"
            title="Вы уверены?"
            buttonText = 'Да'
            closePopupClickOverlay = {closePopupClickOverlay}
        />
            

        <ImagePopup 
            card={selectedCard}
            onClose = {closeAllPopups}
            closePopupClickOverlay = {closePopupClickOverlay}
        />
        
    </div>
    );
}

export default App;
