import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import DeleteCardPopup from './DeleteCardPopup';
import api from '../utils/Api';
import { UserContext } from '../contexts/CurrentUserContext';


function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isDeleteCardPopup, setIsDeleteCardPopup] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [selectedDeleteCard, setSelectedDeleteCard] = React.useState(null);
    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);
        
      
    React.useEffect(() => {
        api.getUserInfo()
            .then((userInfo) => setCurrentUser(userInfo))
            .catch(err => console.log(err))
            
        function handleCloseEscape (evt) {
            if (evt.key === 'Escape') {
                closeAllPopups()
            } 
        }

        api.getCards()
            .then(loadCards =>  setCards(loadCards))
            .catch(err => console.log(err))
                   
        document.addEventListener('keydown', handleCloseEscape);

    }, [])


    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard(false)
        setIsDeleteCardPopup(false)
    }


    function handleClickDeleteCardButton (item) {
        setIsDeleteCardPopup(!isDeleteCardPopup)
        setSelectedDeleteCard(item)
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


    function handleCardClick(card) {
        setSelectedCard(card)
    }


    function closePopupClickOverlay (evt) {
        if (evt.target.classList.contains('popup_opened')) {
            closeAllPopups()
        }
    }


    function handleUpdateUser (formdata) {
        api.editUserInfo(formdata)
            .then((userInfo) => {
                setCurrentUser(userInfo)
        })
        .catch(err => console.log(err))

        closeAllPopups()
    }


    function handleUpdateAvatar (formdata) {
        api.editAvatar(formdata)
            .then((userAvatar) => {
                setCurrentUser(userAvatar)
        })
        .catch(err => console.log(err))

        closeAllPopups()
    }


    function handleAddPlaceSubmit (item) {
        api.addCard(item)
            .then((newCard) => {
                setCards([newCard, ...cards])
            })
            .catch(err => console.log(err))

        closeAllPopups()
    }


    function handleCardLike (card) {
        const isLiked = card.likes.some(userLiked => userLiked._id === currentUser._id);
        
        api.changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
                setCards((cards) => cards.map((elementFromCards) => elementFromCards._id === card._id ? newCard : elementFromCards));
        })
            .catch(err => console.log(err))
    }

    
    function handleDeleteCard (card) {
        api.deleteCard(card._id)
            .then(() => {
                setCards((cards) => cards.filter(elementFromCards => elementFromCards._id !== card._id));
        })
            .catch(err => console.log(err))
        closeAllPopups()
    }
    
    
    
return (
    
    <div className="page">
        <UserContext.Provider value={currentUser}>
        <Header />
        
        <Main 
            onEditAvatar={handleEditAvatarClick} 
            onEditProfile={handleEditProfileClick} 
            onAddPlace={handleAddPlaceClick}
            onCardClick = {handleCardClick}
            cards={cards}
            onCardLike = {handleCardLike}
            onClickDeleteCardButton = {handleClickDeleteCardButton}
        />

        <Footer />

        <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose ={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            closePopupClickOverlay = {closePopupClickOverlay}
        />


        <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose ={closeAllPopups}
            closePopupClickOverlay = {closePopupClickOverlay}
            onUpdateAvatar = {handleUpdateAvatar}
        />
        
        <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose ={closeAllPopups}
            closePopupClickOverlay = {closePopupClickOverlay}
            onAddPlace = {handleAddPlaceSubmit}
        />
        
        

       <DeleteCardPopup 
            closePopupClickOverlay={closePopupClickOverlay}
            onClose ={closeAllPopups}
            onDeleteCard ={handleDeleteCard}
            isOpen={isDeleteCardPopup}
            deleteCard={selectedDeleteCard}
       />
            

        <ImagePopup 
            card={selectedCard}
            onClose = {closeAllPopups}
            closePopupClickOverlay = {closePopupClickOverlay}
        />
        </UserContext.Provider>
    </div>
    );
}

export default App;
