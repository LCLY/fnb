import React from 'react';
// components
import HeaderComponent from '../../components/UI/HeaderComponent/HeaderComponent';
import NavbarComponent from '../../components/Navigation/NavbarComponent/NavbarComponent';
// 3rd party lib

function ContactPage() {
    return (
        <div>
            <HeaderComponent />
            <NavbarComponent activePage="contact" />
            ContactPage
        </div>
    );
}

export default ContactPage;
