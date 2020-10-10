import React from 'react';
// component
import NavbarComponent from '../../components/Navigation/NavbarComponent/NavbarComponent';
import { Button } from 'react-bootstrap';
import './HomePage.scss';

function HomePage() {
    return (
        <div>
            <header className="home__header">
                <div>
                    <div className="home__title-div">
                        <span className="home__title">Lorem ipsum dolor</span>
                    </div>
                    <div className="home__desc">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                    </div>
                    <Button variant="primary" className="home__learnmore">
                        Learn More
                    </Button>
                </div>
            </header>
            <NavbarComponent />
            <div style={{ height: '100rem' }}>HomePage</div>
        </div>
    );
}

export default HomePage;
