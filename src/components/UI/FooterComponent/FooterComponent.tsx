import React from 'react';
import './FooterComponent.scss';

// 3rd party lib
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

function FooterComponent() {
  return (
    <section className="footer__outerdiv">
      <Container>
        <Row>
          <Col lg={4} md={4} sm={12} xs={12}>
            <div className="footer__col footer__col--1">
              <div>
                <span className="footer__restaurant-name">Eah-Food Restaurant</span>
                <div className="footer__restaurant-address">
                  Jalan Klang Lama, <br />
                  No. 2, Jalan 1/13a, <br />
                  58000 Kuala Lumpur
                </div>
                <div className="margin_t-1">
                  <span className="footer__restaurant-contact">Contact Us:</span>&nbsp;
                  <span className="footer__restaurant-phone">018-888-8888 </span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <div className="footer__col footer__col--2">
              <div style={{ width: '100%' }}>
                <div className="footer__email-text">Join our Mailing List</div>
                <div className="footer__email-div">
                  <Form.Control type="email" className="footer__email-input" placeholder="Email Address" />
                  <Button className="footer__email-button" variant="outline-light">
                    SIGN UP
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <div className="footer__col footer__col--3">
              <div className="footer__follow-outerdiv">
                <div className="footer__follow-text">Follow us</div>
                <div className="footer__follow-icons-div">
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-facebook-square"></i>
                  <i className="fab fa-twitter-square"></i>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

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
