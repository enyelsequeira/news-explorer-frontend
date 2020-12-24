import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedHeader from '../Header/SavedHeader';
import './SavedNews.css';

const SaveNews = ({ cards, headerClick }) => (
  <section className="saved">
    <SavedHeader buttonClick={headerClick} />
    <p className="saved__title">Saved Articles</p>
    <h1 className="saved__heading">You have 1 saved Articles</h1>
    <p className="saved__text">
      By keywords
    </p>
    <NewsCardList cards={cards} savedArticles="true" loggedIn="true" hoverText="Remove from saved" />

  </section>
);

export default SaveNews;
