import React from 'react';
import './SignUpPage.scss';
// component
import FooterComponent from '../../../components/UI/FooterComponent/FooterComponent';
import NavbarComponent from '../../../components/Navigation/NavbarComponent/NavbarComponent';
// 3rd party lib
import { Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function SignUpPage() {
  const { t } = useTranslation(['auth']);
  return (
    <>
      <NavbarComponent activePage="" showSignUp={false} />
      <div className="signup__outerdiv">
        <div className="signup__div">
          <div className="signup__title">{t('auth:sign_up:title')}</div>

          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>{t('auth:sign_up:email:label')}</Form.Label>
              <Form.Control type="email" placeholder="example@gmail.com" />
              <Form.Text className="text-muted">{t('auth:sign_up:email:note')}</Form.Text>
            </Form.Group>
            <section className="signup__name-div">
              <Form.Group controlId="formBasicFirstName">
                <div className="signup__name-first">
                  <div>
                    <Form.Label>{t('auth:sign_up:first_name:label')}</Form.Label>
                  </div>
                  <div>
                    <Form.Control type="text" placeholder={t('auth:sign_up:first_name:placeholder')} />
                  </div>
                </div>
              </Form.Group>
              <Form.Group controlId="formBasicLastName">
                <div className="signup__name-last">
                  <div>
                    <Form.Label>{t('auth:sign_up:last_name:label')}</Form.Label>
                  </div>
                  <div>
                    <Form.Control type="text" placeholder={t('auth:sign_up:last_name:label')} />
                  </div>
                </div>
              </Form.Group>
            </section>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>{t('auth:sign_up:password:label')}</Form.Label>
              <Form.Control type="password" placeholder={t('auth:sign_up:password:placeholder')} />
            </Form.Group>
            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>{t('auth:sign_up:confirm_password:label')}</Form.Label>
              <Form.Control type="password" placeholder={t('auth:sign_up:confirm_password:placeholder')} />
            </Form.Group>
            <Button variant="primary" type="submit" className="signup__button-submit">
              {t('auth:sign_up:submit_button')}
            </Button>
          </Form>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default SignUpPage;
