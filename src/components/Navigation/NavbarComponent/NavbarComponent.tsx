import React, { useState } from 'react';
import './NavbarComponent.scss';
// component
import CustomBurger from '../CustomBurger/CustomBurger';
import { Navbar, Form, Button, Nav } from 'react-bootstrap';
// 3rd party lib
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { useTranslation /* ,Trans */ } from 'react-i18next';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface OwnProps {
  activePage: string;
  showSignUp?: boolean; //optional, show sign up if true else show sign in
}
type Props = OwnProps & StateProps & DispatchProps & RouteComponentProps;

function NavbarComponent({ history, language, activePage, showSignUp = false, onSwitchLanguage }: Props) {
  // state
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  // translation
  const { t, i18n } = useTranslation(['translation', 'navbar']);
  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
  };

  return (
    <Navbar className="navbar__outerdiv" bg="tertiary" variant="dark" expand="lg">
      <div className="navbar__innerdiv-main" style={{ width: '100%' }}>
        <Navbar.Brand className="navbar__logo-div" href="/">
          <i className="fas fa-utensils navbar__icon"></i>
          <span className="navbar__logo-text">EAH-FOOD</span>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <div className="navbar__link--desktop">
            <div className={`navbar__link ${activePage === 'home' ? 'active' : ''}`} onClick={() => history.push('/')}>
              Home
            </div>
            <div
              className={`navbar__link ${activePage === 'menu' ? 'active' : ''}`}
              onClick={() => history.push('/menu')}
            >
              Menu
            </div>
            <div
              className={`navbar__link ${activePage === 'gallery' ? 'active' : ''}`}
              onClick={() => history.push('/gallery')}
            >
              Gallery
            </div>
            <div
              className={`navbar__link ${activePage === 'contact' ? 'active' : ''}`}
              onClick={() => history.push('/contact')}
            >
              Contact
            </div>
          </div>
          <div className="navbar__link--mobile">
            <CustomBurger showElement={showDropdown} setShowElement={setShowDropdown} />
          </div>
        </Nav>

        <Form inline>
          <Button
            variant="secondary"
            className="navbar__button-language"
            onClick={() => {
              if (language === 'en') {
                console.log('change to chinese');
                changeLanguage('zh');
                onSwitchLanguage('zh');
              } else {
                console.log('change to english');
                changeLanguage('en');
                onSwitchLanguage('en');
              }
            }}
          >
            {t('translation:language', '中')}
          </Button>
          <Button
            variant="primary margin_r-1"
            onClick={() => (showSignUp ? history.push('/signup') : history.push('/login'))}
          >
            {showSignUp ? t('navbar:button:sign_up', 'Sign up') : t('navbar:button:sign_in', 'Sign in')}
          </Button>
          <Button variant="outline-light">
            <i className="fas fa-shopping-cart"></i>
          </Button>
        </Form>
      </div>
      <div
        className="navbar__innerdiv-expand"
        style={{
          opacity: showDropdown ? 1 : 0,
          padding: showDropdown ? '1rem 2rem' : 0,
          marginBottom: showDropdown ? '1rem' : 0,
          height: showDropdown ? '12rem' : 0,
        }}
      >
        <div
          className={`navbar__innerdiv-expand-link ${activePage === 'home' ? 'active' : ''}`}
          onClick={() => showDropdown && history.push('/')}
        >
          Home
        </div>
        <div
          className={`navbar__innerdiv-expand-link ${activePage === 'menu' ? 'active' : ''}`}
          onClick={() => showDropdown && history.push('/menu')}
        >
          Menu
        </div>
        <div
          className={`navbar__innerdiv-expand-link ${activePage === 'gallery' ? 'active' : ''}`}
          onClick={() => showDropdown && history.push('/gallery')}
        >
          Gallery
        </div>
        <div
          className={`navbar__innerdiv-expand-link ${activePage === 'contact' ? 'active' : ''}`}
          onClick={() => showDropdown && history.push('/contact')}
        >
          Contact
        </div>
      </div>
    </Navbar>
  );
}

interface StateProps {
  language: string;
}

const mapStateToProps = (state: any): StateProps => {
  return { language: state.general.language };
};

interface DispatchProps {
  onSwitchLanguage: typeof actions.switchLanguage;
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): DispatchProps => {
  return { onSwitchLanguage: (language) => dispatch(actions.switchLanguage(language)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavbarComponent));
