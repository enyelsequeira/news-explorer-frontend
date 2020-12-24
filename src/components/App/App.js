/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import SaveNews from '../SavedNews/SaveNews';
import NewsCardList from '../NewsCardList/NewsCardList';
import RegistrationSuccessful from '../FormPopups/RegistrationSuccesful';
import SignUp from '../FormPopups/form/SignUp';

const App = () => {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: 'test' });
  const [loggedIn, setLoggedIn] = useState(true);

  const [cards, setCards] = useState([{
    keyword: 'Nature',
    title: 'Mountains',
    text: 'Did you see as the world fell down, and how we are surrounded by nature and what happens in there. Have you seen the cats? Have you seen the trees? Have you ever watched the sun rise over the hill?',
    date: 'November 12, 2020',
    source: 'Misaka',
    link: 'www.home.com',
    image: 'https://images.all-free-download.com/images/graphicthumb/beautiful_natural_scenery_04_hd_pictures_166229.jpg',
  },
  {
    keyword: 'Animals',
    title: 'Baby Panda',
    text: "Tai Shan, whose name means Peaceful Mountain, was the first giant panda born at the Smithsonian's National Zoo in Washington, D.C., to survive infancy. Now 15 years old, Tai Shan lives at the China Conservation and Research Center for the Giant Panda.",
    date: 'December 12, 2020',
    source: 'National Geographic',
    link: 'https://www.nationalgeographic.com/photography/2020/12/riveting-pictures-from-the-nat-geo-photo-archives/',
    image: 'https://tinyjpg.com/images/social/website.jpg',
  },
  {
    keyword: 'Animals',
    title: 'Baby Panda',
    text: "Tai Shan, whose name means Peaceful Mountain, was the first giant panda born at the Smithsonian's National Zoo in Washington, D.C., to survive infancy. Now 15 years old, Tai Shan lives at the China Conservation and Research Center for the Giant Panda.",
    date: 'December 12, 2020',
    source: 'National Geographic',
    link: 'https://www.nationalgeographic.com/photography/2020/12/riveting-pictures-from-the-nat-geo-photo-archives/',
    image: 'https://tinyjpg.com/images/social/website.jpg',
  },
  {
    keyword: 'Animals',
    title: 'Baby Panda',
    text: "Tai Shan, whose name means Peaceful Mountain, was the first giant panda born at the Smithsonian's National Zoo in Washington, D.C., to survive infancy. Now 15 years old, Tai Shan lives at the China Conservation and Research Center for the Giant Panda.",
    date: 'December 12, 2020',
    source: 'National Geographic',
    link: 'https://www.nationalgeographic.com/photography/2020/12/riveting-pictures-from-the-nat-geo-photo-archives/',
    image: 'https://tinyjpg.com/images/social/website.jpg',
  },
  {
    keyword: 'Medicine',
    title: 'Covid-19 Vaccine',
    text: 'High-ranking White House officials are set to receive some of the first coronavirus vaccines in the United States, according to a White House official and a person familiar. Those vaccinations, which could begin as soon as this week, would come while the vaccine is in extremely limited supply and only generally available to high-risk health care workers.The New York Times first reported on the White House vaccinations.',
    date: 'December 13, 2020',
    source: 'CNN',
    link: 'https://www.cnn.com/2020/12/13/politics/white-house-coronavirus-vaccine/index.html',
    image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/1800x1200_virus_3d_render_red_03_other.jpg',

  }]);

  const history = useHistory();

  // handling modals popup

  const openSignIn = () => {
    setSignUp(false);
    setRegistrationComplete(false);
    setSignIn(true);
  };

  const openSignUp = () => {
    setSignIn(false);
    setSignUp(true);
  };
  const openSuccess = () => {
    setRegistrationComplete(true);
  };
  const closeAll = (e) => {
    if (e.target !== e.currentTarget) return;
    setSignUp(false);
    setRegistrationComplete(false);
    setSignIn(false);
  };

  const signInSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    setSignIn(false);
    setCurrentUser({ name: 'UserName' });
  };
  const signUpSubmit = (e) => {
    e.preventDefault();
    setSignUp(false);
    openSuccess();
  };
  const logout = () => {
    setCurrentUser({});
    history.push('/');
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main headerClick={loggedIn ? logout : openSignIn} loggedIn={loggedIn} />
            {/* <NewsCardList cards={cards} hover="Sign in to save articles" /> */}
            {/* <About /> */}
          </Route>

          <Route path="/saved-news">
            <SaveNews cards={cards} headerClick={logout} />
          </Route>

        </Switch>

        {/* <Footer /> */}
        {/* <RegistrationSuccessful isOpen={registrationComplete} onClose={closeAll} toggle={openSignIn} />
        <signIn singInOpen={signIn} onClose={closeAll} handleSubmit={signInSubmit} toggle={openSignUp} />
        <SignUp singUpOpen={signUp} onClose={closeAll} handleSubmit={signUpSubmit} toggle={openSignIn} /> */}
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
