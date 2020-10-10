import React from 'react';
import './HomePage.scss';
// component
import HeaderComponent from '../../components/UI/HeaderComponent/HeaderComponent';
import NavbarComponent from '../../components/Navigation/NavbarComponent/NavbarComponent';
// 3rd party lib
// import { Button } from 'react-bootstrap';

function HomePage() {
    return (
        <div>
            <HeaderComponent />
            <NavbarComponent />
            <div style={{ height: '100rem' }}>HomePage</div>
        </div>
    );
}

export default HomePage;
