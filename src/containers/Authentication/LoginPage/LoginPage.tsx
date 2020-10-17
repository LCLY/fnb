import React, { useState } from 'react';
import './LoginPage.scss';
// component
import FooterComponent from '../../../components/UI/FooterComponent/FooterComponent';
import NavbarComponent from '../../../components/Navigation/NavbarComponent/NavbarComponent';

// 3rd party lib
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { Form, Button, Spinner } from 'react-bootstrap';
import * as actions from '../../../store/actions/index';
import { useTranslation, Trans } from 'react-i18next';

interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

function LoginPage({ loading, onLogin }: Props): JSX.Element {
  // state
  const initLoginData = { username: '', password: '' }; //store object into var
  type LoginType = typeof initLoginData; //get the type
  const [loginData, setLoginData] = useState<LoginType>(initLoginData); //state the type and place the data in
  // translation
  const { t } = useTranslation(['auth']);

  return (
    <>
      <NavbarComponent activePage="" showSignUp={true} />
      <div className="login__outerdiv">
        <div className="login__div">
          <div className="login__title">{t('auth:sign_in:title')}</div>
          <div className="login__button-div">
            <Button variant="facebook" className="login__button-facebook" type="submit">
              <i className="fab fa-facebook-square"></i>&nbsp;{t('auth:sign_in:form:facebook', 'Facebook')}
            </Button>
            <Button variant="google" className="login__button-google" type="submit">
              <i className="fab fa-google"></i>&nbsp;{t('auth:sign_in:form:google', 'Google')}
            </Button>
          </div>

          <Form
            onSubmit={(e) => {
              e.preventDefault();
              onLogin(loginData.username, loginData.password);
            }}
          >
            <Form.Group controlId="formBasicEmail">
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
  loading: boolean;
}

const mapStateToProps = (state: any): StateProps => {
  return { loading: state.auth.loading };
};

interface DispatchProps {
  onLogin: typeof actions.authenticate;
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): DispatchProps => {
  return { onLogin: (username: string, password: string) => dispatch(actions.authenticate(username, password)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
