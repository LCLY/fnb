import React from 'react';
import './FooterComponent.scss';

// 3rd party lib
import { Form, Button } from 'react-bootstrap';

function FooterComponent() {
  return (
    <section className="footer__outerdiv">
      <div className="footer__innerdiv">
        <div className="footer__col--1">
          <div>
            <span className="footer__restaurant-name">Eah-Food Restaurant</span>
            <br />
            Jalan Klang Lama, <br />
            No. 2, Jalan 1/13a, <br />
            58000 Kuala Lumpur
            <br />
            <div className="margin_t-1">
              <span className="footer__restaurant-contact">Contact Us:</span>&nbsp;
              <span className="footer__restaurant-phone">018-888-8888 </span>
            </div>
          </div>
        </div>
        <div className="footer__col--2">
          <div style={{ width: '100%' }}>
            <div className="footer__email-text">Join our Mailing List</div>
            <div className="footer__email-div">
              <Form.Control className="footer__email-input" placeholder="Email Address" />
              <Button assName="footer__email-button" variant="outline-light">
                SIGN UP
              </Button>
            </div>
          </div>
        </div>
        <div className="footer__col--3">
          <div className="footer__follow-text">Follow us</div>
          <div className="footer__follow-icons-div">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-twitter-square"></i>
          </div>
        </div>
      </div>
      <div className="footer__copyright-div">
        © 2020 Eah Food
        <span className="footer__copyright-policy">
          <a className="footer__copyright-policy-link" href="/">
            Privacy Policy
          </a>
        </span>
      </div>
    </section>
  );
}

export default FooterComponent;
