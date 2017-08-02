import React, { PropTypes } from 'react';

import {
    Framework7App,
    Views,
    View,
    Statusbar,
    Navbar,
    Pages,
    Page,
    ContentBlock
} from 'framework7-react';

import { routes } from '../routes';

import { About } from './pages/About';

const MainViews = (props, context) => {
    return (
        <Views>
            <View id="main-view" navbarThrough dynamicNavbar={true} main url="/">
                <Pages>
                    <About />
                </Pages>
            </View>
        </Views>
    );
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
        <MainViews />
    </Framework7App>
);