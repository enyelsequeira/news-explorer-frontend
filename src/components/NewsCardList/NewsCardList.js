/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React, { useLayoutEffect, useState } from 'react';
import { INITIALNEWS } from '../../utils/utils';
import Card from '../Card/Card';

const NewsCardList = (props) => {
  // console.log(cards, 955555555555);
  const [isButtonVisible, setIsButtonVissible] = useState(false);
  const [displayedCards, setDisplayedCards] = useState([]);
  const [count, setCount] = useState(INITIALNEWS);

  useLayoutEffect(() => {
    if (props.savedArticles) {
      setIsButtonVissible(false);
      setCount(props.cards.length);
    } else {
      setDisplayedCards(props.cards.slice(0, count));
      if (props.cards.length < count) {
        setIsButtonVissible(false);
      } else { setIsButtonVissible(true); }
    }
  }, [count]);

  return (
    <section className="cards">
      <div className="cards__container">
        <h2 className={`cards__container_title ${props.savedArticles ? 'hidden' : ''}`}>Search Results</h2>
        <ul className="cards__container-list">
          {props.savedArticles ? props.cards.map((card, index) => (<Card key={index} keyword={card.keyword} title={card.title} text={card.text} date={card.date} source={card.source} image={card.link} savedArticles={props.savedArticles} hover={props.hover} loggedIn={props.loggedIn} cardId={card._id} onDelete={props.onChange} />))
            : displayedCards.map((card, index) => (
              <Card
                key={index}
                keyword={props.keyword}
                title={card.title}
                text={card.description}
                date={card.publishedAt}
                source={card.source.name}
                link={card.url}
                image={card.urlToImage}
                savedArticles={props.savedArticles}
                loggedIn={props.loggedIn}
                hover={props.hover}
              />
            ))}

        </ul>
      </div>
      <button type="button" onClick={() => setCount((prevCount) => prevCount + 3)} className={`cards__btn ${isButtonVisible ? '' : 'hidden'}`}>Show More</button>
    </section>
  );
};
export default NewsCardList;
