import React from 'react';
import './SignUpPage.scss';
// component
import FooterComponent from '../../../components/UI/FooterComponent/FooterComponent';
import NavbarComponent from '../../../components/Navigation/NavbarComponent/NavbarComponent';
// 3rd party lib
import { Form, Button } from 'react-bootstrap';

function SignUpPage() {
  return (
    <>
      <NavbarComponent activePage="" showSignUp={false} />
      <div className="signup__outerdiv">
        <div className="signup__div">
          <div className="signup__title">SIGN UP</div>

          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="example@gmail.com" />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
            <Form.Group className="signup__name-div" controlId="formBasicName">
              <section className="signup__name-first">
                <div>
                  <Form.Label>First Name</Form.Label>
                </div>
                <div>
                  <Form.Control type="text" placeholder="First Name" />
                </div>
              </section>
              <section className="signup__name-last">
                <div>
                  <Form.Label>Last Name</Form.Label>
                </div>
                <div>
                  <Form.Control type="text" placeholder="Last Name" />
                </div>
              </section>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password here" />
            </Form.Group>
            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Type password again here" />
            </Form.Group>

            <Button variant="primary" type="submit" className="signup__button-submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default SignUpPage;
