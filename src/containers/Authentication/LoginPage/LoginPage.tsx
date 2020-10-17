import React, { useState, useEffect } from 'react';
import './LoginPage.scss';
// component
import FooterComponent from '../../../components/UI/FooterComponent/FooterComponent';
import NavbarComponent from '../../../components/Navigation/NavbarComponent/NavbarComponent';

// 3rd party lib
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Dispatch, AnyAction } from 'redux';
import { useTranslation, Trans } from 'react-i18next';
import * as actions from '../../../store/actions/index';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';

interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

function LoginPage({ error, loading, isAuthenticated, onLogin, onClearAuthState }: Props): JSX.Element {
  // state
  const initLoginData = { username: '', password: '' }; //store object into var
  type LoginType = typeof initLoginData; //get the type
  const [loginData, setLoginData] = useState<LoginType>(initLoginData); //state the type and place the data in
  const [redirect, setRedirect] = useState<boolean>(false);
  // translation
  const { t } = useTranslation(['auth']);

  useEffect(() => {
    if (isAuthenticated) {
      let timer = setTimeout(() => {
        setRedirect(true);
      }, 500);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (error) {
      // if there's error, hide error after 2s
      let timer = setTimeout(() => {
        onClearAuthState();
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [error]);

  return (
    <>
      {/* if redirect is true, go to homepage always */}
      {redirect && <Redirect to="/" />}
      <NavbarComponent activePage="" showSignUp={true} />
      <div className="login__outerdiv">
        <div className="login__div">
          {/* Sign in title */}
          <div className="login__title">{t('auth:sign_in:title')}</div>
          <div className="login__button-div">
            {/* facebook and google button */}
            <Button variant="facebook" className="login__button-facebook" type="submit">
              <i className="fab fa-facebook-square"></i>&nbsp;{t('auth:sign_in:form:facebook', 'Facebook')}
            </Button>
            <Button variant="google" className="login__button-google" type="submit">
              <i className="fab fa-google"></i>&nbsp;{t('auth:sign_in:form:google', 'Google')}
            </Button>
          </div>

          <Form
            onSubmit={(e) => {
              e.preventDefault(); //preventing page from reloading when submit button is clicked
              onLogin(loginData.username, loginData.password);
            }}
          >
            <Form.Group controlId="formBasicEmail">
              {isAuthenticated && <Alert variant="success">Login Successful!</Alert>}
              {error && <Alert variant="danger">{error}</Alert>}
              <Form.Label>{t('auth:sign_in:form:email:label', 'Email Address')}</Form.Label>
              <Form.Control
                type="email"
                placeholder={t('auth:sign_in:form:email:placeholder', 'Enter Email Address')}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>{t('auth:sign_in:form:password:label', 'Password')}</Form.Label>
              <Form.Control
                type="password"
                placeholder={t('auth:sign_in:form:password:placeholder', 'Enter Password')}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              />
            </Form.Group>
            <div className="login__forgetpw-div">
              <a className="login__forgetpw" href="/">
                {t('auth:sign_in:form:password:forget', 'Forget Password')}?
              </a>
            </div>
            <Button variant="primary" type="submit" disabled={loading} className="login__button-submit">
              {loading ? <Spinner animation="border" /> : t('auth:sign_in:submit_button', 'Submit')}
            </Button>
          </Form>
        </div>
        <div className="login__noaccount">
          <Trans i18nKey="auth:sign_in:form:signup_link">
            Don't have an account? Sign up&nbsp;
            <a className="login__noaccount-link" href="/signup">
              here
            </a>
          </Trans>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

interface StateProps {
  error: string;
  loading: boolean;
  isAuthenticated: boolean;
}

const mapStateToProps = (state: any): StateProps => {
  return { error: state.auth.error, loading: state.auth.loading, isAuthenticated: state.auth.authToken !== null };
};

interface DispatchProps {
  onLogin: typeof actions.authenticate;
  onClearAuthState: typeof actions.clearAuthState;
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): DispatchProps => {
  return {
    onLogin: (username: string, password: string) => dispatch(actions.authenticate(username, password)),
    onClearAuthState: () => dispatch(actions.clearAuthState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
