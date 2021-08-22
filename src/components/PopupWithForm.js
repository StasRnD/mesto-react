function PopupWithForm (props) {
   
    return ( 
        
        <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`} onClick={props.closePopupClickOverlay}>
            <div className="popup__container">
                <button type="button" className={`popup__close popup__close_type_${props.name}`} aria-label="Закрыть попап" onClick={props.onClose}></button>
                <form name={props.name} className={`popup__form popup__form_type_${props.name}`}>
                    <h2 className="popup__title">{props.title}</h2>
                    <fieldset className="popup__fieldset">
                        {props.children} 
                    </fieldset>
                    <button type="submit" aria-label="Удалить карточку" className="popup__save">{props.buttonText}</button>
                </form>
             </div>
         </div>  
          
    ) 

}

export default PopupWithForm