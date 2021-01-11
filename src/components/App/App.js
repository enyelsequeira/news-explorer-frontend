/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
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
import * as auth from '../../utils/auth';
import newsApi from '../../utils/news-api';
import NoResults from '../Preloader/NoResults';
import Preloader from '../Preloader/Preloader';
import ResultError from '../Preloader/ResultError';

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [keyword, setKeyWord] = useState('');
  const [cards, setCards] = useState([]);
  const [results, setResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [resultError, setResultError] = useState(false);
  const history = useHistory();
  const [token, setToken] = useState('');

  // logic to get token this

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem('jwt');
    if (tokenFromStorage) {
      auth.checkToken(tokenFromStorage).then((res) => {
        setCurrentUser(res);
        setLoggedIn(true);
      }).catch((err) => console.error(err));
    }
  }, []);

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

  const signInSubmit = (password, email) => {
    // console.log('i am here');
    auth.authorize(password, email).then((res) => {
      // console.log({ res }, 'i am in app');
      if (res.token) {
        auth.checkToken(res.token).then((res) => {
          // console.log('after checking singin', res);
          setCurrentUser(res);
          setLoggedIn(true);
        });
      }
    }).then(() => {
      setSignIn(false);
    })
      .catch((err) => console.error(err));
  };

  // const signInSubmit = ({ password, email }) => {
  //   setShouldValidate(false);
  //   auth.authorize(password, email).then((res) => {
  //     console.log(res, 7875);
  //     if (res.token) {
  //       console.log('after authorize in signin', res.token);
  //       setUserToken(res.token);
  //     }
  //   }).then(() => {
  //     auth.checkToken(userToken).then((res) => {
  //       console.log('after checking singin', res);
  //       setCurrentUser(res);
  //       setLoggedIn(true);
  //       setShouldValidate(true);
  //     });
  //   }).then(() => {
  //     setSignIn(false);
  //   })
  //     .catch((err) => console.log(err));
  // };

  const signUpSubmit = ({ email, password, name }) => {
    auth.register(email, password, name).then(() => {
      setSignUp(false);
      openSuccess();
    }).catch((err) => console.log(err));

    // e.preventDefault();
    // setSignUp(false);
    // openSuccess();
  };
  const logout = () => {
    setLoggedIn(false);
    setCurrentUser({});
    localStorage.removeItem('jwt');
    history.push('/');
  };
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      setSignUp(false);
      setRegistrationComplete(false);
      setSignIn(false);
    }
  });

  const search = (keyword) => {
    setKeyWord(keyword);
    setNoResults(false);
    setResultError(false);
    setLoading(true);
    newsApi.getArticles(keyword).then((res) => {
      // console.log(res, 'this is only articles');
      setCards(res);
      setLoading(false);
      if (res.length === 0) {
        setNoResults(true);
      } else {
        // console.log('do i go here?');
        setNoResults(false);

        setResults(true);
      }
    }).catch((err) => {
      setLoading(false);
      setResultError(true);
      console.log(err);
    });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main currentUser={currentUser} headerClick={loggedIn ? logout : openSignIn} loggedIn={loggedIn} search={search} />
            {
              results ? <NewsCardList cards={cards} keyword={keyword} hover="Sign in to save articles" loggedIn={loggedIn} /> : ''

            }
            {
              noResults ? <NoResults /> : ''
            }
            {
              loading ? <Preloader /> : ''
            }
            {resultError ? <ResultError /> : ''}

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
