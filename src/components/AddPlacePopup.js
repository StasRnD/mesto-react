import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup (props) {

    const [link, setLink] = React.useState('')
    const [name, setName] = React.useState('')

    function handleChangeName (evt) {
        setName(evt.target.value)
    }

    function handleChangeLink (evt) {
        setLink(evt.target.value)
    }

    function handleSubmit (evt) {
        evt.preventDefault();
        props.onAddPlace({
            name,
            link,
        })
    }

    return (
        <PopupWithForm 
            name="add-card"
            title="Новое место"
            isOpen={props.isOpen}
            onClose ={props.onClose}
            buttonText = 'Сохранить'
            closePopupClickOverlay = {props.closePopupClickOverlay}
            onSubmit = {handleSubmit}
        >
            <input type="text" name="title" id="title" placeholder="Название"  
                className="popup__input popup__input_type_title-card" minLength="2" maxLength="30" required 
                value={name || ''} onChange={handleChangeName}
            />
            <span className="popup__text-error title-error"></span>
            <input type="url" name="link" id="link" placeholder="Ссылка на картинку"  
                className="popup__input popup__input_type_link-card" required 
                value={link || ''} onChange={handleChangeLink}
            />
            <span className="popup__text-error link-error"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup