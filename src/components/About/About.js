/* eslint-disable max-len */
import React from 'react';

import enyel from '../../images/workpic.png';

const About = () => (
  <section className="about">
    <img className="about__image" src={enyel} alt="enyel" />
    <div className="about__text">
      <h2 className="about__text-title">About the author</h2>
      <p className="about__text-para">
        This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know.
      </p>
      <p className="about__text-para">You can also talk about your experience with Practicum, what you learned there, and how you can help potential customers.</p>
      <p className="about__text-para">Text goes here</p>
      <p className="about__text-para">Text goes here</p>

    </div>
  </section>
);

export default About;
