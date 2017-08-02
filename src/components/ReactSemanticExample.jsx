import React, { PropTypes } from 'react';

import {
    Framework7App,
    Views,
    View,
    Statusbar,
    Navbar, NavLeft, NavCenter,
    //NavRight,
    Pages,
    //Page,
    //ContentBlock, ContentBlockTitle,
    Link,
    //List, ListItem,
    //Panel
} from 'framework7-react';

import { routes } from '../routes';

import { Home } from './pages/Home';
//import { KitchenSink } from './pages/KitchenSink';
//import { About } from './pages/About';
import 'semantic-ui-css/semantic.min.css';

import { LeftPanel } from './LeftPanel';

const MainViews = (props, context) => {
    return (
        <Views>
            <View id="main-view" navbarThrough dynamicNavbar={true} main url="/">
                <Navbar>
                    <NavLeft>
                        <Link icon="icon-bars" openPanel="left" />
                    </NavLeft>
                    <NavCenter sliding>KitchenSink</NavCenter>
                </Navbar>
                <Pages>
                    {/*Default or Home page*/}
                    <Home />
                </Pages>
            </View>
        </Views>
    );
};

MainViews.contextTypes = {
    framework7AppContext: PropTypes.object
};

let framework7;
let currentRoute;

export const getFramework7 = () => {
    return framework7;
};

export const getCurrentRoute = () => {
    return currentRoute;
};

export const ReactSemanticExample = () => (
    <Framework7App
        themeType="ios"
        onFramework7Init={(f7) => framework7 = f7}
        onRouteChange={(route) => currentRoute = route}
        routes={routes}>
        <Statusbar />
        <LeftPanel />
        <MainViews />
    </Framework7App>
);