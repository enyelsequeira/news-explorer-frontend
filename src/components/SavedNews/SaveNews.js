import React, { useContext } from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedHeader from '../Header/SavedHeader';
import CurrentUserContext from '../../contexts/CurrentUserContext';

const SaveNews = ({ cards, headerClick }) => {
  const currentUser = useContext(CurrentUserContext);
  const byKeywords = () => {
    const keywords = [];
    cards.forEach((card) => {
      console.log(card.keyword);
      keywords.push(`${card.keyword} `);
    });
    return keywords.slice(0, 3); // dynamic to only show +2
  };
  return (
    <section className="saved">
      <SavedHeader buttonClick={headerClick} />
      <p className="saved__title">Saved Articles</p>
      <h1 className="saved__heading">
        {currentUser.name}
        , You have
        {' '}
        {cards.length}
        {' '}
        saved Articles
      </h1>
      <p className="saved__text">
        By Keywords:
        <span className="saved__keywords">
          {byKeywords()}
        </span>
      </p>
      <NewsCardList cards={cards} savedArticles="true" loggedIn="true" hover="Remove from saved" />

    </section>
  );
};

export default SaveNews;
