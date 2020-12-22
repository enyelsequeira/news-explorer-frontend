/* eslint-disable react/no-array-index-key */
import React from 'react';
import Card from '../Card/Card';
import './NewsCardList.css';

const NewsCardList = ({ cards, hover }) => {
  console.log(hover);

  return (
    <section className="cards__list">
      <h2 className="cards__list-name">Search Results</h2>
      <ul className="cards__list-container">
        {cards.map((card, index) => (
          <Card card={card} key={index} hover={hover} />
        ))}
      </ul>
      <button className="cards__list-btn" type="submit">Show More</button>
    </section>
  );
};

export default NewsCardList;
