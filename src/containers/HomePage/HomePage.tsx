import React from 'react';
import './HomePage.scss';
// component
import HeaderComponent from '../../components/UI/HeaderComponent/HeaderComponent';
import FooterComponent from '../../components/UI/FooterComponent/FooterComponent';
import NavbarComponent from '../../components/Navigation/NavbarComponent/NavbarComponent';

// 3rd party lib
import Ratings from 'react-ratings-declarative';
import { Accordion, Container, Form, Button, InputGroup, Card } from 'react-bootstrap';
// Utils
import { useWindowDimensions } from '../../shared/HandleWindowResize/HandleWindowResize';

function HomePage() {
  /* destructure */
  const { width } = useWindowDimensions();
  // data
  let formSelectData: { defaultValue: string; dataArray: string[] }[] = [
    {
      defaultValue: 'Cuisine',
      dataArray: ['American', 'Asian', 'Chinese', 'Thai', 'Indian'],
    },
    {
      defaultValue: 'Type of Meal',
      dataArray: ['Breakfast', 'Lunch', 'Dinner'],
    },
    {
      defaultValue: 'Type of Dish',
      dataArray: ['Burgers', 'Noodles', 'Rice', 'Drinks', 'Salad', 'Soup'],
    },
    {
      defaultValue: 'Dietary Needs',
      dataArray: ['Gluten Free', 'Healthy', 'Keto-Friendly', 'Vegetarian', 'Meat Lover', 'Halal'],
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

  // let objectDataArray = [
  //   {
  //     brand: {
  //       name: 'Brand 1',
  //       make1: {
  //         name: 'Make 1',
  //         body1: { name: 'body1', acc1: 'acc1', acc2: 'acc2' },
  //         body2: { name: 'body2', acc1: 'acc1', acc2: 'acc2' },
  //       },
  //       make2: {
  //         name: 'Make 2',
  //         body1: { name: 'body1', acc1: 'acc1', acc2: 'acc2' },
  //         body2: { name: 'body2', acc1: 'acc1', acc2: 'acc2' },
  //       },
  //     },
  //   },
  //   {
  //     brand: {
  //       name: 'Brand 2',
  //       make1: {
  //         name: 'Make 1',
  //         body1: { name: 'body1', acc1: 'acc1', acc2: 'acc2' },
  //         body2: { name: 'body2', acc1: 'acc1', acc2: 'acc2' },
  //       },
  //       make2: {
  //         name: 'Make 2',
  //         body1: { name: 'body1', acc1: 'acc1', acc2: 'acc2' },
  //         body2: { name: 'body2', acc1: 'acc1', acc2: 'acc2' },
  //       },
  //     },
  //   },
  // ];

  // <table style={{ width: '50rem', marginLeft: '2rem' }}>
  //         <tbody>
  //           <tr>
  //             <th>Brand</th>
  //             <th>Make</th>
  //             <th>Body</th>
  //             <th>Acc</th>
  //           </tr>
  //           {objectDataArray.map((data, index) => {
  //             console.log(data);
  //             return (
  //               <React.Fragment key={index}>
  //                 {/* 1st mini row */}
  //                 <tr>
  //                   <td rowSpan={8}>{data.brand.name}</td>
  //                   <td rowSpan={4}>{data.brand.make1.name}</td>
  //                   <td rowSpan={2}>{data.brand.make1.body1.name}</td>
  //                   <td>{data.brand.make1.body1.acc1}</td>
  //                 </tr>
  //                 {/* 2nd mini row */}
  //                 <tr>
  //                   <td>{data.brand.make1.body1.acc2}</td>
  //                 </tr>
  //                 {/* 3rd mini row */}
  //                 <tr>
  //                   <td rowSpan={2}>{data.brand.make2.body2.name}</td>
  //                   <td>{data.brand.make2.body2.acc1}</td>
  //                 </tr>
  //                 {/* 4th mini row */}
  //                 <tr>
  //               e2.body2.acc2}</td>
  //                 <    <td>{data.brand.mak/tr>
  //                 {/* 5th mini row */}
  //                 <tr>
  //                   <td rowSpan={4}>{data.brand.make2.name}</td>
  //                   <td rowSpan={2}>{data.brand.make1.body1.name}</td>
  //                   <td>{data.brand.make1.body2.acc1}</td>
  //                 </tr>
  //                 {/* 6th mini row */}
  //                 <tr>
  //                   <td>{data.brand.make1.body2.acc2}</td>
  //                 </tr>
  //                 {/* 7th mini row */}
  //                 <tr>
  //                   <td rowSpan={2}>{data.brand.make2.body2.name}</td>
  //                   <td>{data.brand.make1.body1.acc1}</td>
  //                 </tr>
  //                 {/* 8th mini row */}
  //                 <tr>
  //                   <td>{data.brand.make1.body2.acc2}</td>
  //                 </tr>
  //               </React.Fragment>
  //             );
  //           })}
  //         </tbody>
  //       </table>

  return (
    <div>
      <HeaderComponent />
      <NavbarComponent activePage="home" />
      <section className="home__section-main">
        <div className="home__order-calltoaction">
          <div className="home__order-calltoaction-text">Cum and order, bumiputera Only</div>
          <div className="home__order-button-div">
            <Button className="home__order-button" variant="outline-light">
              Regular <span className="home__order-button-text">Ordering</span>
            </Button>
            <Button className="home__order-button" variant="tertiary">
              Catering / Scheduling <span className="home__order-button-text">Ordering</span>
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
                    placeholder="What would you like to eat today?"
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
                      <span className="home__search-button-text">Search</span>
                      &nbsp;<i className="fas fa-search"></i>
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form>
            </div>
            <section className="home__menu-filter">
              <div className="home__filter-result">500 Items</div>
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
                    <i className="fas fa-filter"></i>&nbsp;Filter
                  </Button>
                  <Button variant="outline-secondary" className="home__filter-button margin_l-1">
                    Clear
                  </Button>
                </div>
              </Form>

              <Accordion className="home__filter--mobile">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Apply filter
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
                              <i className="fas fa-filter"></i>&nbsp;Filter
                            </Button>
                            <Button variant="outline-secondary" className="home__filter-button margin_l-1">
                              Clear
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
