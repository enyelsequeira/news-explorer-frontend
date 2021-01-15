/* eslint-disable max-len */
import React from 'react';

import enyel from '../../images/workpic.png';

const About = () => (
  <section className="about">
    <img className="about__image" src={enyel} alt="enyel" />
    <div className="about__text">
      <h2 className="about__text-title">About the author</h2>
      <p className="about__text-para">
        I am a web developer that comes from a teaching and Business background. Through my past experiences, I can balance the need of users and businesses to understand their pain points and how I can contribute as a Front-end developer and solve their problems
      </p>
      <p className="about__text-para">I&#39;ve worked with a wide range of people from different backgrounds and demographics. This has enabled me to adapt and become flexible in the workplace.</p>

    </div>
  </section>
);

export default About;
