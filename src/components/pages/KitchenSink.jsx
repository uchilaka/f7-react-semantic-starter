import React, { PropTypes } from 'react';
import {
    Page,
    Navbar,
    NavLeft,
    NavCenter,
    ContentBlockTitle,
    ContentBlock,
    Link
} from 'framework7-react';

export default class KitchenSinkView extends React.Component {
    render() {
        return (
            <Page>
                <Navbar>
                    <NavLeft>
                        <Link icon="icon-bars" openPanel="left" />
                    </NavLeft>
                    <NavCenter sliding>KitchenSink</NavCenter>
                </Navbar>
                <ContentBlockTitle>This is a section title</ContentBlockTitle>
                <ContentBlock inner>
                    This is some content to go here. Hello world!
                </ContentBlock>
            </Page>
        );
    }
};

export const KitchenSink = KitchenSinkView;