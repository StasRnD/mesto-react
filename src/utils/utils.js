import { Card } from '../components/Card.js';
import { userInfo, popupWithImage } from '../pages/index.js';
import { popupWithSubmit } from '../pages/index.js';

export function handleFormSubmit(formdata) {
    userInfo.setUserInfo(formdata)
 } 
 
 export function createCard (item, {likeClick, deleleButtonClick}) {
    const card = new Card (item, '.template_type_card-in-places', () => {
       popupWithImage.open(item)
    }, {likeClick, deleleButtonClick}, popupWithSubmit)

    
   

    return card.generateCard()
 }

