import React from 'react';
import './HomePage.scss';
// component
import HeaderComponent from '../../components/UI/HeaderComponent/HeaderComponent';
import NavbarComponent from '../../components/Navigation/NavbarComponent/NavbarComponent';
// 3rd party lib
import { Container, Form, Button, InputGroup, Card } from 'react-bootstrap';

function HomePage() {
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
            dataArray: [
                'Gluten Free',
                'Healthy',
                'As Unhealthy As Possible',
                'Keto-Friendly',
                'Vegetarian',
                'Carnivorous',
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
                <div className="home__order">
                    <div className="home__order-button">
                        <div>
                            <i className="home__order-button-icon fas fa-laptop"></i>
                        </div>
                        <div className="home__order-button-text">Regular Ordering</div>
                    </div>
                    <div className="home__order-button">
                        <div>
                            <i className="home__order-button-icon far fa-calendar-alt"></i>
                        </div>
                        <div className="home__order-button-text">Catering / Scheduling Ordering</div>
                    </div>
                </div>
                <div className="home__order-calltoaction">
                    <div className="home__order-calltoaction-text">Come and order, bumiputera Only</div>
                </div>
            </section>
            <section className="home__section-menu">
                <div className="home__menu-title">
                    <Container>
                        <i className="fas fa-clipboard-list"></i>&nbsp;Menu
                    </Container>
                </div>

                <Container>
                    <div className="home__menu-outerdiv">
                        <div className="home__menu-search">
                            <Form>
                                <InputGroup className="home__search-input">
                                    <Form.Control
                                        placeholder="&#xF002; What would you like to eat today?"
                                        aria-label="searchbar"
                                        aria-describedby="searchbar"
                                        style={{
                                            fontFamily: ' FontAwesome, Arial',
                                            fontStyle: 'normal',
                                            padding: '2rem 3rem',
                                        }}
                                    />
                                    <InputGroup.Append>
                                        <Button variant="tertiary" className="home__search-button">
                                            Search
                                        </Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Form>
                        </div>
                        <section className="home__menu-filter">
                            <div className="home__filter-result">500 Items</div>
                            <Form>
                                <div className="home__filter-selects">
                                    {formSelectData.map((formSelect, index) => {
                                        return (
                                            <Form.Group
                                                className="home__filter-select"
                                                key={index}
                                                controlId={formSelect.defaultValue}
                                            >
                                                <Form.Control as="select">
                                                    <option defaultValue={formSelect.defaultValue}>
                                                        {formSelect.defaultValue}
                                                    </option>
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
                        </section>
                        <div className="home__cards-outerdiv">
                            {cardDataArray.map((card, index) => {
                                return (
                                    <Card key={index} style={{ width: '35rem' }}>
                                        <Card.Img
                                            variant="top"
                                            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                        />
                                        <Card.Body>
                                            <Card.Title>
                                                <span
                                                    style={{
                                                        marginBottom: '1.5rem',
                                                        color: '#694f28',
                                                    }}
                                                >
                                                    {card.title} of the food here
                                                </span>
                                            </Card.Title>

                                            <Card.Text className="margin_b-2 ">
                                                Description {card.description}
                                            </Card.Text>
                                            <div className="flex space-between">
                                                <div className="flex-align-center">
                                                    <Button variant="primary" style={{ borderRadius: '50%' }}>
                                                        <i className="fas fa-minus"></i>
                                                    </Button>
                                                    <Form.Control
                                                        style={{ width: '4rem', textAlign: 'center', margin: '0 1rem' }}
                                                        value={card.amount}
                                                    />
                                                    <Button variant="primary" style={{ borderRadius: '50%' }}>
                                                        <i className="fas fa-plus"></i>
                                                    </Button>
                                                </div>

                                                <Card.Text>Price: {card.price}</Card.Text>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}

export default HomePage;
