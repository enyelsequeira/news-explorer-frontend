/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './Card.css';

const Card = ({ card, hover }) => {
  const isLoggedIn = true;
  console.log(hover);

  return (
    <li className="card">
      <img className="card__image" src={card.image} alt="" />
      {/* TODO logic to toggle these classes */}
      <button className="card__save-button" type="button" />
      {isLoggedIn ? <button className="card__hover-text" type="button">{hover}</button> : null}

      <p className="card__date">{card.date}</p>
      <h3 className="card__title">{card.title}</h3>
      <p className="card__text">{card.text}</p>
      <p className="card__source">
        <a className="card__source-link" href={card.link}>
          {card.source}
          {' '}
        </a>

      </p>

    </li>

  );
};

export default Card;
