import React from 'react';
import PopupWithForm from './PopupWithForm';
import { UserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup (props) {

    const currentUser = React.useContext(UserContext);
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    function handleChangeName(evt) {
        setName(evt.target.value);
    }

    function handleChangeDescription(evt) {
        setDescription(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onUpdateUser({
            name,
            about: description
        })
    }
    
    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, [currentUser]);


    return (
        <PopupWithForm 
            name="edit-profile"
            title="Редактировать профиль"
            isOpen={props.isOpen}
            onClose ={props.onClose}
            buttonText = 'Сохранить'
            closePopupClickOverlay = {props.closePopupClickOverlay}
            onSubmit={handleSubmit}
        >
            <input type="text" name="name" id="name" 
                placeholder="введите имя" className="popup__input popup__input_type_name" 
                minLength="2" maxLength="40" required
                value={name || ''} 
                onChange={handleChangeName}
            />
            <span className="popup__text-error name-error"></span>
            <input type="text" name="profession" id="profession" 
                placeholder="введите профессию" className="popup__input popup__input_type_profession" 
                minLength="2" maxLength="200" required
                value={description || ''} 
                onChange={handleChangeDescription}
            />
            <span className="popup__text-error profession-error"></span>
        
        </PopupWithForm>
    )   
}

export default EditProfilePopup