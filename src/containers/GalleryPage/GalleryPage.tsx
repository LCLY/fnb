import React from 'react';
// component
import HeaderComponent from '../../components/UI/HeaderComponent/HeaderComponent';
import NavbarComponent from '../../components/Navigation/NavbarComponent/NavbarComponent';

function GalleryPage() {
    return (
        <div>
            <HeaderComponent />
            <NavbarComponent activePage="gallery" />
            Gallery
        </div>
    );
}

export default GalleryPage;
