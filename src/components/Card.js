function Card ({link, name, likes, item, onCardClick}) {
    
   const handleardClick = () => {
    onCardClick(item)
   }

    return (
        <article className="place">
            <button type="button" aria-label="Удалить карточку" className="place__delete-button" ></button>
            <img src={link} alt={name} className="place__foto" onClick={handleardClick}/>
            <div className="place__description">
                <h2 className="place__title">{name}</h2>
                <div className="place__elements-like">
                    <button type="button" aria-label="Поставить лайк" className="place__like-button"></button>
                    <span className="place__like-counter">{likes.length}</span>
                </div>
            </div>
        </article>
    )
}

export default Card