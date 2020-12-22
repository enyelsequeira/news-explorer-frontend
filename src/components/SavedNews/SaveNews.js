import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedHeader from '../Header/SavedHeader';
import './SavedNews.css';

const SaveNews = ({ hover, cards }) => (
  <section className="saved">
    <SavedHeader />
    <p className="saved__title">Saved Articles</p>
    <h1 className="saved__heading">You have 1 saved Articles</h1>
    <p className="saved__text">
      By keywords
    </p>
    <NewsCardList cards={cards} hover={hover} />

  </section>
);

export default SaveNews;
