import React, { Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
/* containers */
import Homepage from './containers/HomePage/HomePage';
import MenuPage from './containers/MenuPage/MenuPage';
import ContactPage from './containers/ContactPage/ContactPage';
import GalleryPage from './containers/GalleryPage/GalleryPage';
import PageNotFound from './components/PageNotFound/PageNotFound';
function App() {
    let route = null;
    route = (
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/menu" component={MenuPage} />
            <Route exact path="/gallery" component={GalleryPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/404" component={PageNotFound} />
            <Redirect from="*" to="/404" />
        </Switch>
    );

    return <Suspense fallback={<p>Loading...</p>}>{route}</Suspense>;
}

export default App;
