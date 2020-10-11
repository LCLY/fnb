import React, { useState } from 'react';
import './NavbarComponent.scss';
// component
import CustomBurger from '../CustomBurger/CustomBurger';
import { Navbar, Form, Button, Nav } from 'react-bootstrap';
// 3rd party lib
import { withRouter, RouteComponentProps } from 'react-router-dom';

type HeaderProps = {
    activePage: string;
};

function NavbarComponent({ history, activePage }: RouteComponentProps<{}> & HeaderProps) {
    const [language, setLanguage] = useState<string>('En');
    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    return (
        <Navbar className="navbar__outerdiv" bg="tertiary" variant="dark" expand="lg">
            <div className="navbar__innerdiv-main" style={{ width: '100%' }}>
                <Navbar.Brand className="navbar__logo-div" href="/">
                    <i className="fas fa-utensils navbar__icon"></i>
                    <span className="navbar__logo-text">EAH-FOOD</span>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <div className="navbar__link--desktop">
                        <div
                            className={`navbar__link ${activePage === 'home' ? 'active' : ''}`}
                            onClick={() => history.push('/')}
                        >
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
                            if (language === 'En') {
                                setLanguage('中');
                            } else {
                                setLanguage('En');
                            }
                        }}
                    >
                        {language}
                    </Button>
                    <Button variant="primary margin_r-1">Sign In</Button>
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

export default withRouter(NavbarComponent);
