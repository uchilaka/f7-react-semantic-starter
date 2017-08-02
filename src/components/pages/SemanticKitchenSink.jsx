import React from 'react';
import {
    Page,
    Navbar,
    NavLeft,
    NavCenter,
    ContentBlockTitle,
    ContentBlock,
    Link
} from 'framework7-react';
import {
    Container,
    Header
} from 'semantic-ui-react';

class SemanticKitchenSinkView extends React.Component {
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
                <ContentBlock>
                    <Container>
                        <Header>Header</Header>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                </Container>
                </ContentBlock>
            </Page>
        );
    }
};

export const SemanticKitchenSink = SemanticKitchenSinkView;