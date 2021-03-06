import React from 'react';
import './HomePage.scss';
// component
import HeaderComponent from '../../components/UI/HeaderComponent/HeaderComponent';
import FooterComponent from '../../components/UI/FooterComponent/FooterComponent';
import NavbarComponent from '../../components/Navigation/NavbarComponent/NavbarComponent';

// 3rd party lib
import Ratings from 'react-ratings-declarative';
import { useTranslation, Trans } from 'react-i18next';
import { Accordion, Container, Form, Button, InputGroup, Card } from 'react-bootstrap';
// Utils
import { useWindowDimensions } from '../../shared/HandleWindowResize/HandleWindowResize';

function HomePage() {
  /* destructure */
  const { width } = useWindowDimensions();
  const { t } = useTranslation(['homepage']);
  // data
  let formSelectData: { defaultValue: string; dataArray: string[] }[] = [
    {
      defaultValue: t('homepage:filter:category:cuisine:text', 'Cuisine'),
      dataArray: [
        t('homepage:filter:category:cuisine:american', 'American'),
        t('homepage:filter:category:cuisine:malaysia', 'Malaysian'),
        t('homepage:filter:category:cuisine:thai', 'Thai'),
        t('homepage:filter:category:cuisine:chinese', 'Chinese'),
        t('homepage:filter:category:cuisine:indian', 'Indian'),
      ],
    },
    {
      defaultValue: t('homepage:filter:category:meal_type:text', 'Type of Meal'),
      dataArray: [
        t('homepage:filter:category:meal_type:breakfast', 'Breakfast'),
        t('homepage:filter:category:meal_type:lunch', 'Lunch'),
        t('homepage:filter:category:meal_type:dinner', 'Dinner'),
      ],
    },
    {
      defaultValue: t('homepage:filter:category:dish_type:text', 'Type of Dish'),
      dataArray: [
        t('homepage:filter:category:dish_type:burgers', 'Burgers'),
        t('homepage:filter:category:dish_type:noodles', 'Noodles'),
        t('homepage:filter:category:dish_type:rice', 'Rice'),
        t('homepage:filter:category:dish_type:drinks', 'Drinks'),
        t('homepage:filter:category:dish_type:salad', 'Salad'),
        t('homepage:filter:category:dish_type:soup', 'Soup'),
      ],
    },
    {
      defaultValue: t('homepage:filter:category:dietary_needs:text', 'Dietary Needs'),
      dataArray: [
        t('homepage:filter:category:dietary_needs:gluten', 'Gluten Free'),
        t('homepage:filter:category:dietary_needs:healthy', 'Healthy'),
        t('homepage:filter:category:dietary_needs:keto', 'Keto-Friendly'),
        t('homepage:filter:category:dietary_needs:vegetarian', 'Vegetarian'),
        t('homepage:filter:category:dietary_needs:meat', 'Meat Lover'),
        t('homepage:filter:category:dietary_needs:halal', 'Halal'),
      ],
    },
  ];

  let cardDataArray = [
    {
      title: 'Title',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore',
      price: '$20.00',
      amount: 0,
    },
    {
      title: 'Title',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore',
      price: '$20.00',
      amount: 0,
    },
    {
      title: 'Title',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore',
      price: '$20.00',
      amount: 0,
    },
    {
      title: 'Title',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore',
      price: '$20.00',
      amount: 0,
    },
    {
      title: 'Title',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore',
      price: '$20.00',
      amount: 0,
    },
    {
      title: 'Title',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore',
      price: '$20.00',
      amount: 0,
    },
    {
      title: 'Title',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore',
      price: '$20.00',
      amount: 0,
    },
    {
      title: 'Title',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore',
      price: '$20.00',
      amount: 0,
    },
  ];

  return (
    <div>
      <HeaderComponent />
      <NavbarComponent activePage="home" />
      <section className="home__section-main">
        <div className="home__order-calltoaction">
          <div className="home__order-calltoaction-text">
            {t('homepage:header:title', 'CUM AND ORDER, BUMIPUTERA ONLY')}
          </div>
          <div className="home__order-button-div">
            <Button className="home__order-button" variant="outline-light">
              <Trans i18nKey="homepage:header:button:regular">
                Regular <span className="home__order-button-text">Ordering</span>
              </Trans>
            </Button>
            <Button className="home__order-button" variant="tertiary">
              <Trans i18nKey="homepage:header:button:catering">
                Catering / Scheduling <span className="home__order-button-text">Ordering</span>
              </Trans>
            </Button>
          </div>
        </div>
      </section>
      <section className="home__section-menu">
        {/* <div className="home__menu-title">
                    <Container>
                        <i className="fas fa-clipboard-list"></i>&nbsp;Menu
                    </Container>
                </div> */}

        <Container>
          <div className="home__menu-outerdiv">
            <div className="home__menu-search">
              <Form>
                <InputGroup className="home__search-div">
                  <Form.Control
                    className="home__search-input"
                    placeholder={t('homepage:search:placeholder')}
                    aria-label="searchbar"
                    aria-describedby="searchbar"
                    style={{
                      fontFamily: ' FontAwesome, Arial',
                      fontStyle: 'normal',
                      padding: width >= 575 ? '2rem 3rem' : '1rem',
                    }}
                  />
                  <InputGroup.Append>
                    <Button variant="tertiary" className="home__search-button">
                      <span className="home__search-button-text">{t('homepage:search:button')}</span>
                      &nbsp;<i className="fas fa-search"></i>
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form>
            </div>
            <section className="home__menu-filter">
              <div className="home__filter-result">500 {t('homepage:items')}</div>
              {/* Desktop View */}
              <Form className="home__filter--desktop">
                <div className="home__filter-selects">
                  {formSelectData.map((formSelect, index) => {
                    return (
                      <Form.Group className="home__filter-select" key={index} controlId={formSelect.defaultValue}>
                        <Form.Control as="select">
                          <option defaultValue={formSelect.defaultValue}>{formSelect.defaultValue}</option>
                          {formSelect.dataArray.map((data) => {
                            return <option key={data}>{data}</option>;
                          })}
                        </Form.Control>
                      </Form.Group>
                    );
                  })}
                  <Button variant="primary" className="home__filter-button">
                    <i className="fas fa-filter"></i>&nbsp;{t('homepage:filter:button:filter')}
                  </Button>
                  <Button variant="outline-secondary" className="home__filter-button margin_l-1">
                    {t('homepage:filter:button:clear')}
                  </Button>
                </div>
              </Form>

              {/* Mobile view */}
              <Accordion className="home__filter--mobile">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      {t('homepage:filter:title')}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Form className="home__filter--mobile">
                        <div className="home__filter-selects">
                          {formSelectData.map((formSelect, index) => {
                            return (
                              <Form.Group
                                className="home__filter-select"
                                key={index}
                                controlId={formSelect.defaultValue}
                              >
                                <Form.Control as="select">
                                  <option defaultValue={formSelect.defaultValue}>{formSelect.defaultValue}</option>
                                  {formSelect.dataArray.map((data) => {
                                    return <option key={data}>{data}</option>;
                                  })}
                                </Form.Control>
                              </Form.Group>
                            );
                          })}
                          <div className="home__filter-button-div">
                            <Button variant="primary" className="home__filter-button">
                              <i className="fas fa-filter"></i>&nbsp;{t('homepage:filter:button:filter')}
                            </Button>
                            <Button variant="outline-secondary" className="home__filter-button margin_l-1">
                              {t('homepage:filter:button:clear')}
                            </Button>
                          </div>
                        </div>
                      </Form>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </section>
            <div className="home__cards-outerdiv">
              {cardDataArray.map((card, index) => {
                return (
                  <Card key={index} className="home__cards">
                    <div className="home__cards-image-parent">
                      <Card.Img
                        variant="top"
                        className="home__cards-image"
                        src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      />
                      <div className="home__ratings-div">
                        <Ratings
                          rating={2.5}
                          widgetRatedColors="rgb(237, 240, 58)"
                          widgetDimensions={'2rem'}
                          widgetSpacings={'0.2rem'}
                        >
                          <Ratings.Widget />
                          <Ratings.Widget />
                          <Ratings.Widget />
                          <Ratings.Widget />
                          <Ratings.Widget />
                        </Ratings>
                      </div>
                    </div>

                    <Card.Body>
                      <Card.Title className="home__cards-title">
                        <span
                          style={{
                            marginBottom: '1.5rem',
                            color: '#694f28',
                          }}
                        >
                          {card.title} of the food here
                        </span>
                      </Card.Title>

                      <Card.Text className="margin_b-2 home__cards-description">
                        Description {card.description}
                      </Card.Text>
                      <div className="flex-align-center space-between">
                        <div className="flex-align-center">
                          <Button variant="primary" className="home__cards-button">
                            <i className="fas fa-minus"></i>
                          </Button>
                          <Form.Control
                            style={{ width: '4rem', textAlign: 'center', margin: '0 1rem' }}
                            value={card.amount}
                          />
                          <Button className="home__cards-button" variant="primary">
                            <i className="fas fa-plus"></i>
                          </Button>
                        </div>

                        <Card.Text>
                          Price: <span className="home__cards-price">{card.price}</span>
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
      <FooterComponent />
    </div>
  );
}

export default HomePage;
