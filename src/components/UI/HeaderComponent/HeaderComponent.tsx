import React from 'react';
import { Button } from 'react-bootstrap';
import './HeaderComponent.scss';

function HeaderComponent() {
    return (
        <header className="header">
            <div>
                <div className="header__title-div">
                    <span className="header__title">Lorem ipsum dolor</span>
                </div>
                <div className="header__desc">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                </div>
                <Button variant="primary" className="header__learnmore">
                    Learn More
                </Button>
            </div>
            <div className="header__openhours">
                <span className="header__openhours-text">Open Hours:</span> Mon-Fri 9am-12am
            </div>
        </header>
    );
}

export default HeaderComponent;
