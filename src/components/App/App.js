/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Redirect, Route, Switch, useHistory,
} from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import SaveNews from '../SavedNews/SaveNews';
import NewsCardList from '../NewsCardList/NewsCardList';
import RegistrationSuccessful from '../PopupWihForm/RegistrationSuccessful';
import SignInPopout from '../PopupWihForm/Form/SingInPopout';
import SignUpPopout from '../PopupWihForm/Form/SingUpPopout';
import ProtectedRoute from '../ProtectedRoute';

const App = () => {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: 'test' });
  const [loggedIn, setLoggedIn] = useState(false);

  const [cards, setCards] = useState([{
    keyword: 'Nature',
    title: 'Grand Teton Renews Historic Crest Trail',
    text: 'We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.',
    date: 'November 12, 2020',
    source: 'Misaka',
    link: 'www.home.com',
    image: 'https://images.unsplash.com/photo-1608754786700-002ea0379062?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    keyword: 'Animals',
    title: 'Grand Teton Renews Historic Crest Trail',
    text: 'We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves..',
    date: 'December 12, 2020',
    source: 'National Geographic',
    link: 'https://www.nationalgeographic.com/photography/2020/12/riveting-pictures-from-the-nat-geo-photo-archives/',
    image: 'https://images.unsplash.com/photo-1608671611568-895aaf8ec972?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    keyword: 'Animals',
    title: 'Grand Teton Renews Historic Crest Trail',
    text: 'We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.',
    date: 'December 12, 2020',
    source: 'National Geographic',
    link: 'https://www.nationalgeographic.com/photography/2020/12/riveting-pictures-from-the-nat-geo-photo-archives/',
    image: 'https://images.unsplash.com/photo-1608671611568-895aaf8ec972?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    keyword: 'Animals',
    title: 'Everyone Needs a Special  in Nature',
    text: 'We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.',
    date: 'December 12, 2020',
    source: 'National Geographic',
    link: 'https://www.nationalgeographic.com/photography/2020/12/riveting-pictures-from-the-nat-geo-photo-archives/',
    image: 'https://images.unsplash.com/photo-1608671611568-895aaf8ec972?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    keyword: 'Animals',
    title: 'Nature makes you better',
    text: 'We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.',
    date: 'December 12, 2020',
    source: 'National Geographic',
    link: 'https://www.nationalgeographic.com/photography/2020/12/riveting-pictures-from-the-nat-geo-photo-archives/',
    image: 'https://images.unsplash.com/photo-1608671611568-895aaf8ec972?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },

  ]);

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
    setLoggedIn(false);
    setCurrentUser({});
    history.push('/');
  };
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      setSignUp(false);
      setRegistrationComplete(false);
      setSignIn(false);
    }
  });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main headerClick={loggedIn ? logout : openSignIn} loggedIn={loggedIn} />
            <NewsCardList cards={cards} hover="Sign in to save articles" loggedIn={loggedIn} />
            <About />
          </Route>

          <ProtectedRoute path="/saved-news" loggedIn={loggedIn} component={SaveNews} headerClick={logout} singInDirect={openSignIn} />
          <Route path="/*">
            <Redirect to="/" />
          </Route>

        </Switch>

        <Footer />
        <RegistrationSuccessful isOpen={registrationComplete} onClose={closeAll} redirectLink={openSignIn} />

        <SignInPopout signInOpen={signIn} onClose={closeAll} handleSubmit={signInSubmit} toggle={openSignUp} />

        <SignUpPopout signUpOpen={signUp} onClose={closeAll} handleSubmit={signUpSubmit} toggle={openSignIn} />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
