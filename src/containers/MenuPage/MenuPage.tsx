import React from 'react';
// component
import HeaderComponent from '../../components/UI/HeaderComponent/HeaderComponent';
import NavbarComponent from '../../components/Navigation/NavbarComponent/NavbarComponent';
// 3rd party lib
// import { Button } from 'react-bootstrap';
function MenuPage() {
    return (
        <div>
            <HeaderComponent />
            <NavbarComponent activePage="menu" />
            MenuPage
        </div>
    );
}

export default MenuPage;
