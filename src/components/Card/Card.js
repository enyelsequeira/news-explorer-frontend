/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';

const Card = ({
  date, title, text, link, source, hover, loggedIn, image, savedArticles, keyword,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const saveHover = () => {
    if (loggedIn) {
      return;
    }
    setIsVisible(true);
  };
  const handleSaveClick = (e) => {
    if (loggedIn) {
      e.target.classList.toggle('card__save-button_saved');
    }
  };

  return (
    <li className="card">
      <img className="card__image" src={image} alt={title} />

      <button className={`card__save-button ${savedArticles ? 'hidden' : ''}`} onMouseEnter={saveHover} onMouseLeave={() => setIsVisible(false)} onClick={handleSaveClick} type="button" />

      <button className={`card__trash-button ${savedArticles ? '' : 'hidden'}`} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)} type="button" />

      <button className={`card__keyword-button ${savedArticles ? '' : 'hidden'}`} type="button">{keyword}</button>

      <button className={`card__hover-text ${isVisible ? '' : 'hidden'}`} type="button">{hover}</button>

      <p className="card__date">{date}</p>
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{text}</p>
      <p className="card__source">
        <a className="card__source-link" href={link}>
          {source}
          {' '}
        </a>

      </p>

    </li>

  );
};

export default Card;
