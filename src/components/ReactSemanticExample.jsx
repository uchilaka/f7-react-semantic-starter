import React, { PropTypes } from 'react';

import {
    Framework7App,
    Views,
    View,
    Statusbar,
    Navbar, NavLeft, NavCenter, NavRight,
    Pages,
    Page,
    ContentBlock, ContentBlockTitle,
    Link,
    List, ListItem,
    Panel
} from 'framework7-react';

import { routes } from '../routes';

import { KitchenSink } from './pages/KitchenSink';
//import { About } from './pages/About';

const LeftPanel = (props, context) => (
    <Panel left reveal layout="dark">
        <View id="left-panel-view" navbarThrough dynamicNavbar="true">
            {/*context.framework7AppContext.theme.ios ? <Navbar title="Left Panel"></Navbar> : null*/}
            <Navbar title="Left Panel"></Navbar>
            <Pages>
                <Page>
                    {/*context.framework7AppContext.theme.material ? <Navbar title="Left Panel"></Navbar> : null*/}
                    <Navbar title="Left Panel"></Navbar>
                    <ContentBlock inner>
                        <p>Left panel content goes here</p>
                    </ContentBlock>
                    <ContentBlockTitle>Load page in panel</ContentBlockTitle>
                    <List>
                        <ListItem link="/about/" title="About"></ListItem>
                        <ListItem link="/form/" title="Form"></ListItem>
                    </List>
                    <ContentBlockTitle>Load page in main view</ContentBlockTitle>
                    <List>
                        <ListItem link="/about/" title="About" linkView="#main-view" linkClosePanel></ListItem>
                        <ListItem link="/form/" title="Form" linkView="#main-view" linkClosePanel></ListItem>
                    </List>
                </Page>
            </Pages>
        </View>
    </Panel>
);
LeftPanel.propTypes = {
    framework7AppContext: PropTypes.object
};

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
                    <KitchenSink />
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
        <LeftPanel />
        <MainViews />
    </Framework7App>
);