function ImagePopup ({card, onClose, closePopupClickOverlay}) {

    return (
        <div className={`popup popup_card_card-in-popup popup_type_card-popup ${card ? 'popup_opened' : ''} `} onClick={closePopupClickOverlay}>
            <div className="popup__container popup__container_card_card-in-popup">
                <button type="button" className="popup__close popup__close_type_card-popup" aria-label="Закрыть попап" onClick={onClose}></button>
                <img src={card ? card.link : ''} alt={card ? card.name : ''} className="popup__image" />
                <p className="popup__text">{card ? card.name : ''}</p>
           </div>
       </div>
    )
}

export default ImagePopup