/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import Card from '../Card/Card';

const NewsCardList = ({
  cards, hover, savedArticles, loggedIn,
}) => (
  <section className="cards">
    <div className="cards__container">
      <h2 className={`cards__container_title ${savedArticles ? 'hidden' : ''}`}>Search Results</h2>
      <ul className="cards__container-list">
        {cards.map((card, index) => (
          <Card key={index} keyword={card.keyword} title={card.title} date={card.date} source={card.source} link={card.link} image={card.image} text={card.text} savedArticles={savedArticles} loggedIn={loggedIn} hover={hover} />
        ))}
      </ul>
    </div>
    <button className={`cards__btn ${savedArticles ? 'hidden' : ''}`} type="submit">Show More</button>
  </section>
);

export default NewsCardList;
