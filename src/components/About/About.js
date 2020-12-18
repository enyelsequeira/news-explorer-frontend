/* eslint-disable max-len */
import React from 'react';
import './About.css';
import personalPic from '../../images/workpic.png';

const About = () => (
  <section className="about__container">
    <img className="about__container-image" src={personalPic} alt="About information" />
    <div className="about__container-text">
      <h2 className="about__container-text_title">About the author</h2>
      <p className="about__container-text_info">
        This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know.
      </p>
      <p className="about__container-text_info">
        You can also talk about your experience with Practicum, what you learned there, and how you can help potential customers.
      </p>
    </div>

  </section>
);

export default About;
