import React from 'react';
// component
import NavbarComponent from '../../components/Navigation/NavbarComponent/NavbarComponent';
// 3rd party lib
// import { Button } from 'react-bootstrap';
function MenuPage() {
  return (
    <div>
      <NavbarComponent activePage="menu" />
    </div>
  );
}

export default MenuPage;
