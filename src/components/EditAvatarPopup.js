import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup (props) {

    const userAvatar = React.useRef();

    function handleSubmit (evt) {
        evt.preventDefault()
        props.onUpdateAvatar ({
            avatar: userAvatar.current.value
        })

        userAvatar.current.value = '';
    }
    return (
        <PopupWithForm  
            name="edit-avatar" 
            title="Обновить аватар" 
            isOpen={props.isOpen} 
            onClose ={props.onClose} 
            buttonText = 'Сохранить' 
            closePopupClickOverlay = {props.closePopupClickOverlay}
            onSubmit={handleSubmit} 
        > 
            <input ref ={userAvatar} type="url" name="linkAvatar" id="linkAvatar"
                placeholder="Ссылка на картинку" className="popup__input popup__input_type_link"
                minLength="2" maxLength="200" required 
            /> 
            <span className="popup__text-error linkAvatar-error"></span> 
 
        </PopupWithForm>
    )
}

export default EditAvatarPopup