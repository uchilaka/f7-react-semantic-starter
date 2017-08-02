import React from 'react';
import {
    Page,
    Navbar,
    ContentBlock, ContentBlockTitle
} from 'framework7-react';
import {
    Container,
    Button
} from 'semantic-ui-react';
import { getFramework7 } from '../ReactSemanticExample';

export const Home = (props, context) => (
    <Page>
        <Navbar title="Home" backLink="Back" sliding />
        <ContentBlockTitle>This is some content in the first section</ContentBlockTitle>
        <ContentBlock inner>
            Welcome to my humble home!
        </ContentBlock>
        <Container>
            <ContentBlock>This uses semantic stuff</ContentBlock>
            <Button
                fluid
                size="huge"
                color="yellow"
                onClick={() => { alert("A button was clicked!"); getFramework7().mainView.router.loadPage('/kitchen-sink/'); }}>View Kitchen Sink</Button>
            <Button
                fluid
                size="big"
                color="purple"
                onClick={() => { getFramework7().mainView.router.loadPage('/semantic-kitchen-sink/') }}>Semantic UI Kitchen Sink</Button>
        </Container>
    </Page>
);