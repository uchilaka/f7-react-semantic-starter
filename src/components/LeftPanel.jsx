import React, { PropTypes } from 'react';
import {
    Panel,
    View,
    Navbar,
    List, ListItem,
    ContentBlock, ContentBlockTitle,
    Pages, Page
} from 'framework7-react';

class LeftPanelView extends React.Component {
    constructor(props, context) {
        super(props, context);
        console.info('Props -> %o', props);
        console.info('Context -> %o', context);
    }
    render() {
        return (
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
                                <ListItem link="/semantic-kitchen-sink/" title="Semantic Kitchen Sink" linkView="#main-view" linkClosePanel></ListItem>
                                <ListItem link="/semantic-form/" title="Semantic Form" linkView="#main-view" linkClosePanel></ListItem>
                                <ListItem link="/home/" title="Home" linkView="#main-view" linkClosePanel></ListItem>
                            </List>
                        </Page>
                    </Pages>
                </View>
            </Panel>
        );
    };
};

LeftPanelView.propTypes = {
    framework7AppContext: PropTypes.object
};

export const LeftPanel = LeftPanelView;