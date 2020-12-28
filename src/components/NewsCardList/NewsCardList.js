/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import Card from '../Card/Card';

const NewsCardList = ({
  cards, hover, savedArticles, loggedIn,
}) => (
  <section className="cards__list">
    <h2 className={`cards__list-name ${savedArticles ? 'hidden' : ''}`}>Search Results</h2>
    <ul className="cards__list-container">
      {cards.map((card, index) => (
        <Card key={index} keyword={card.keyword} title={card.title} date={card.date} source={card.source} link={card.link} image={card.image} text={card.text} savedArticles={savedArticles} loggedIn={loggedIn} hover={hover} />
      ))}
    </ul>
    <button className={`cards__list-btn ${savedArticles ? 'hidden' : ''}`} type="submit">Show More</button>
  </section>
);

export default NewsCardList;
