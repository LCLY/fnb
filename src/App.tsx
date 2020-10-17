import React, { Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
/* containers */
import Homepage from './containers/HomePage/HomePage';
import MenuPage from './containers/MenuPage/MenuPage';
import Logout from './containers/Authentication/Logout/Logout';
import ContactPage from './containers/ContactPage/ContactPage';
import GalleryPage from './containers/GalleryPage/GalleryPage';
import PageNotFound from './components/PageNotFound/PageNotFound';
import LoginPage from './containers/Authentication/LoginPage/LoginPage';
import SignUpPage from './containers/Authentication/SignUpPage/SignUpPage';
/* component */
import Preloader from './components/UI/Preloader/Preloader';

// 3rd party lib
import { connect } from 'react-redux';

// import type for state in mapStateToProps
import { IAuthMapState } from './store/types/auth';

interface OwnProps {}

type Props = OwnProps & StateProps;

function App({ isAuthenticated }: Props) {
  let route = null;
  route = (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/menu" component={MenuPage} />
      <Route exact path="/gallery" component={GalleryPage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/404" component={PageNotFound} />
      <Route exact path="/logout" component={Logout} />
      <Redirect from="*" to="/404" />
    </Switch>
  );

  return (
    <>
      <Suspense fallback={<Preloader />}>{route}</Suspense>
      {!isAuthenticated && <Redirect to="/logout" />}
    </>
  );
}

interface StateProps {
  isAuthenticated?: boolean;
}

const mapStateToProps = (state: IAuthMapState): StateProps => {
  return {
    isAuthenticated: state.auth.authToken !== null,
  };
};
export default connect(mapStateToProps, null)(App);
